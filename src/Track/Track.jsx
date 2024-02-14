import './Track.css'
import PropTypes from 'prop-types'

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
  const addTrack = () => {
    onAdd(track)
  }

  const removeTrack = () => {
    onRemove(track)
  }

  const renderAction = () => {
    return isRemoval ? (
      <button className="Track-action" onClick={removeTrack}>
        -
      </button>
    ) : (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    )
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  )
}

Track.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
  }).isRequired,
  isRemoval: PropTypes.bool.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
}

export default Track
