import { useState } from 'react' // Corrected import
import './PlayList.css'
import TrackList from '../TrackList/TrackList'

const Playlist = ({
  playlistName,
  playlistTracks,
  onNameChange,
  onRemove,
  onSave
}) => {
  const [name, setName] = useState(playlistName)

  const handleNameChange = (event) => {
    const newName = event.target.value
    setName(newName)
    onNameChange(newName)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && name) {
      onSave()
    }
  }

  const handleClick = (event) => {
    event.target.setSelectionRange(0, event.target.value.length)
  }

  return (
    <div className="Playlist">
      <input
        id="Playlist-name"
        placeholder="Enter a playlist name"
        value={name}
        onChange={handleNameChange}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

export default Playlist
