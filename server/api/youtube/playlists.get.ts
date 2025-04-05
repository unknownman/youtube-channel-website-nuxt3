export default defineEventHandler(async (event) => {
    console.log('API Route: /api/youtube/playlists called'); 
  
    const config = useRuntimeConfig(event); 
    const apiKey = config.youtubeApiKey;
    const channelId = config.youtubeChannelId;
    const apiBaseUrl = 'https://www.googleapis.com/youtube/v3';
  
    if (!apiKey || !channelId) {
      console.error('API Route Error: YouTube API Key or Channel ID is missing.');
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error.',
      });
    }
  
    const url = `${apiBaseUrl}/playlists?part=snippet,contentDetails&channelId=${channelId}&key=${apiKey}&maxResults=25`;
    console.log(`API Route: Fetching URL: ${url}`);
  
    try {
      const response = await $fetch<{ items: any[] }>(url);
  
      console.log(`API Route: Successfully fetched ${response.items?.length || 0} playlists.`);
  
      const playlists = response.items?.map(item => ({
        id: item.id, 
        title: item.snippet?.title, 
        description: item.snippet?.description, 
        thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
        itemCount: item.contentDetails?.itemCount, 
        publishedAt: item.snippet?.publishedAt, 
      })) || []; 
  
      return playlists;
  
    } catch (apiError: any) {
      console.error('API Route Error - Failed fetching from YouTube API:', apiError.data || apiError.message);
      throw createError({
        statusCode: apiError.statusCode || 500, 
        statusMessage: `Failed to fetch playlists: ${apiError.data?.error?.message || apiError.message}`,
      });
    }
  })