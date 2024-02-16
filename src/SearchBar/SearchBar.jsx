import { useState } from 'react' // Only import what you use directly
import PropTypes from 'prop-types'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm) {
      search()
    }
  }

  const handleClick = (event) => {
    event.target.setSelectionRange(0, event.target.value.length)
  }

  const search = () => {
    if (searchTerm) {
      onSearch(searchTerm)
    }
  }

  return (
    <div className="SearchBar">
      <input
        id="search-input"
        placeholder="Enter a Song, Album, or Artist"
        value={searchTerm}
        onChange={handleTermChange}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
      <button onClick={search}>SEARCH</button>
    </div>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar
