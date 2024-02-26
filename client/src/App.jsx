import PlayList from './components/PlayList/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import './App.css'

const App = () => {
  return (
    <div>
      <PlayList playlistTracks={SearchResults} />
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App
