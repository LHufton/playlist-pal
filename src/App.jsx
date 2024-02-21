import PlayList from './components/PlayList/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Track from './components/Track/Track'
import TrackList from './components/TrackList/TrackList'
import './App.css'

const App = () => {
  return (
    <div>
      <PlayList />
      <SearchBar />
      <SearchResults />
      <Track />
      <TrackList />
    </div>
  )
}

export default App
