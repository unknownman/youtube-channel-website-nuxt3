export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    const config = useRuntimeConfig(event);
    const apiKey = config.youtubeApiKey;
    const apiBaseUrl = 'https://www.googleapis.com/youtube/v3';

    if (!apiKey || !id) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Server configuration error.',
        });
    }

    try {
        // First, get playlist items
        const playlistUrl = `${apiBaseUrl}/playlistItems?part=snippet,contentDetails&playlistId=${id}&key=${apiKey}&maxResults=50`;
        const playlistResponse = await $fetch<{ items: any[] }>(playlistUrl);
        
        // Get video IDs
        const videoIds = playlistResponse.items?.map(item => item.contentDetails?.videoId).filter(Boolean);
        
        if (!videoIds.length) return [];

        // Fetch video details including duration
        const videosUrl = `${apiBaseUrl}/videos?part=contentDetails,snippet&id=${videoIds.join(',')}&key=${apiKey}`;
        const videosResponse = await $fetch<{ items: any[] }>(videosUrl);

        // Map the response
        const videos = videosResponse.items?.map(item => ({
            videoId: item.id,
            title: item.snippet?.title,
            description: item.snippet?.description,
            thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
            publishedAt: item.snippet?.publishedAt,
            duration: item.contentDetails?.duration?.replace('PT', '').toLowerCase() || 'N/A'
        })) || [];

        return videos;
    } catch (error: any) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: `Failed to fetch playlist videos: ${error.message}`,
        });
    }
});