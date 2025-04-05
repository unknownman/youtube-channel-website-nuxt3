export function useYouTube() {
    function getPlaylists() {
        const endpoint = "/api/youtube/playlists"

        const { 
            data: playlists,
            status,
            error,
            refresh
        } = useFetch(endpoint , {
            key:"youtube-playlist"
        })
        return {
            playlists,
            status,
            error, 
            refresh
        }
    }

    return {
        getPlaylists
    }
}