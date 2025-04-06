import { useRuntimeConfig } from '#imports';
import { createError, getQuery, defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    console.log('API Route: /api/youtube/latestVideos called');
    const config = useRuntimeConfig(event);
    const apiKey = config.youtubeApiKey;
    const channelId = config.youtubeChannelId;
    const apiBaseUrl = 'https://www.googleapis.com/youtube/v3';
    const query = getQuery(event);
    const tag = query.tag as string; 

    if (!tag) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required query parameter: tag' });
    }

    console.log(`API Route: Searching for tag: ${tag}`);

    if (!apiKey || !channelId) {
      console.error('API Route Error: YouTube API Key or Channel ID is missing.');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error.',
      });
    }

    const url = `${apiBaseUrl}/search?part=snippet&channelId=${channelId}&key=${apiKey}&order=date&type=video&maxResults=10&q=${encodeURIComponent(tag)}`;
  
    try {
      const response = await $fetch<{ items: any[] }>(url);
      const videos = response.items
        ?.map(item => ({
          videoId: item.id?.videoId,
          title: item.snippet?.title,
          description: item.snippet?.description,
          thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
          publishedAt: item.snippet?.publishedAt,
        }))
        .filter(video => video.videoId) || []; 
      
      console.log('API Route: Fetched videos with hashtags:', videos);
      return videos;
    } catch (apiError: any) {
       console.error('API Route Error - Failed fetching latest videos:', apiError.data || apiError.message);
       throw createError({ statusCode: 500, statusMessage: 'Failed to fetch latest videos.'});
    }
});