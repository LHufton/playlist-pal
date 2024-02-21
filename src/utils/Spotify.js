import axios from 'axios'

export const clientId = import.meta.env.Spotify_Client_Id
export const clientSecret = import.meta.env.Spotify_Client_Secret
const redirectUri = 'https://playlist-pal-f8ebfbb8903f.herokuapp.com/callback'
let accessToken

const Spotify = {
  async getAccessToken() {
    if (accessToken) {
      return accessToken
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000)
      window.history.pushState('Access Token', null, '/')
      return accessToken
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirectUri}`
      window.location.assign(accessUrl)
    }
  },

  async search(searchTerm) {
    try {
      const accessToken = await this.getAccessToken()
      const response = await axios.get(
        `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      )

      const jsonResponse = response.data
      if (!jsonResponse.tracks) return []

      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }))
    } catch (error) {
      console.error(error)
    }
  },

  async savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length) return

    try {
      const accessToken = await this.getAccessToken()
      const headers = { Authorization: `Bearer ${accessToken}` }

      const userResponse = await axios.get('https://api.spotify.com/v1/me', {
        headers
      })
      const userID = userResponse.data.id

      const playlistResponse = await axios.post(
        `https://api.spotify.com/v1/users/${userID}/playlists`,
        { name: playlistName },
        { headers }
      )
      const playlistID = playlistResponse.data.id

      const tracksResponse = await axios.post(
        `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
        { uris: trackURIs },
        { headers }
      )

      return tracksResponse.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default Spotify
