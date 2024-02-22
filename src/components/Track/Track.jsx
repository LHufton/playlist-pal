import './Track.css'
import PropTypes from 'prop-types'

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
  const handleAction = () => {
    isRemoval ? onRemove(track) : onAdd(track)
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{`${track.artist} | ${track.album}`}</p>
      </div>
      <button className="Track-action" onClick={handleAction}>
        {isRemoval ? '-' : '+'}
      </button>
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
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Track
