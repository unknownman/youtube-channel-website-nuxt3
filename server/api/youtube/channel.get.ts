export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const apiKey = config.youtubeApiKey
    const channelId = config.youtubeChannelId
    const apiBaseUrl = 'https://www.googleapis.com/youtube/v3'

    if(!apiKey || !channelId) {
        throw createError({
            statusCode:500,
            statusMessage: "Server configuration error"
        })
    }

    const url = `${apiBaseUrl}/channels?part=snippet,brandingSettings,statistics&id=${channelId}&key=${apiKey}`

    try {
        const response = await $fetch(url)

        if(!response.items || response.items.length == 0) {
            throw createError({
                statusCode:404 ,
                statusMessage: "Channel not found!"
            })
        }

        const channelData = response.items[0]
        const channelInfo = {
            id: channelData.id,
            title: channelData.snippet?.title,
            description: channelData.snippet?.description,
            customUrl: channelData.snippet?.customUrl,
            logoUrl: channelData.snippet?.thumbnails?.medium?.url || channelData.snippet?.thumbnails?.default?.url,
            bannerUrl: channelData.brandingSettings?.image?.bannerExternalUrl,
            subscriberCount: channelData.statistics?.subscriberCount,
            videoCount: channelData.statistics?.videoCount,
            viewCount: channelData.statistics?.viewCount,
            publishedAt: channelData.snippet?.publishedAt
        }
        return channelInfo
    } catch(apiError: any) {
        throw createError({
            statusCode: apiError.statusCode || 500,
            statusMessage: "Failed to fetch channel Info"
        })
    }
})