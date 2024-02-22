import './TrackList.css'
import Track from '../Track/Track'
import PropTypes from 'prop-types'

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks &&
        tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        ))}
    </div>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string
    })
  ).isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.bool
}

export default TrackList
