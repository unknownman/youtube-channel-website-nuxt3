export default defineEventHandler(async (event) => {
    console.log('API Route: /api/youtube/video called');
    const config = useRuntimeConfig(event);
    const apiKey = config.youtubeApiKey;
    const apiBaseUrl = 'https://www.googleapis.com/youtube/v3';
    const query = getQuery(event);
    const videoId = query.id as string; 

    if (!videoId) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required query parameter: id' });
    }

    console.log(`API Route: Fetching video with ID: ${videoId}`);

    if (!apiKey) {
      console.error('API Route Error: YouTube API Key is missing.');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error.',
      });
    }

    const url = `${apiBaseUrl}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
  
    try {
      const response = await $fetch<{ items: any[] }>(url);
      if (!response.items || response.items.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Video not found' });
      }
      const video = response.items[0];
      
      console.log('API Route: Fetched video:', video);
      return video;
    } catch (apiError: any) {
       console.error('API Route Error - Failed fetching video:', apiError.data || apiError.message);
       throw createError({ statusCode: 500, statusMessage: 'Failed to fetch video.'});
    }
});