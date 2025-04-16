export function useYouTube() {
    function getPlaylists() {
        const endpoint = "/api/youtube/playlists"

        const {
            data: playlists,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: "youtube-playlist"
        })
        return {
            playlists,
            status,
            error,
            refresh
        }
    }

    function getChannelInfo() {
        const endpoint = '/api/youtube/channel'

        const {
            data: channelInfo,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: "youtube-channel-info"
        })

        return {
            channelInfo, status, error, refresh
        }
    }

    function getLatestVideos() {
        const endpoint = '/api/youtube/latest'

        const {
            data: videos,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: "youtube-latest-videos"
        })

        return {
            videos, status, error, refresh
        }
    }

    function getLatestShorts() {
        const endpoint = '/api/youtube/latestShort'

        const {
            data: shorts,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: "youtube-latest-shorts"
        })

        return {
            shorts, status, error, refresh
        }
    }

    function getVideosByTag(tag) {
        const endpoint = `/api/youtube/tag?tag=${encodeURIComponent(tag)}`

        const {
            data: videos,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: `youtube-videos-tag-${tag}`
        })

        return {
            videos, status, error, refresh
        }
    }

    function getVideoById(id: string) {
        const endpoint = `/api/youtube/video?id=${encodeURIComponent(id)}`

        const {
            data: video,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: `youtube-video-id-${id}`
        })

        return {
            video, status, error, refresh
        }
    }

    function getPlaylistVideos(playlistId: string) {
        const endpoint = `/api/youtube/playlist/${playlistId}`

        const {
            data: videos,
            status,
            error,
            refresh
        } = useFetch(endpoint, {
            key: `youtube-playlist-${playlistId}`
        })

        return {
            videos,
            status,
            error,
            refresh
        }
    }

    return {
        getPlaylists,
        getChannelInfo,
        getLatestVideos,
        getLatestShorts,
        getVideosByTag,
        getVideoById,
        getPlaylistVideos  
    }
}