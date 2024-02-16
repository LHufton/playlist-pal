import './SearchResults.css'
import TrackList from '../TrackList/TrackList'
import PropTypes from 'prop-types'

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  )
}

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  onAdd: PropTypes.func.isRequired
}

export default SearchResults
