import { useState } from 'react'
import PropTypes from 'prop-types' // Import PropTypes
// import './PlayList.css'
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
        onClick={handleClick}
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

// Define PropTypes for Playlist component
Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlistTracks: PropTypes.array.isRequired, // Assuming it's an array. Adjust as necessary.
  onNameChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default Playlist
