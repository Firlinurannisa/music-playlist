import data from './content/album'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Tracks from './components/Tracks'
import './App.css';
import { SearchProvider, useSearchResult } from './context/useSearchResult';
import { ApiProvider } from './context/useStoreApi';
import UserPlaylist from './components/Playlist';

function App() {
  const { result } = useSearchResult()
  return (
    <div className="App flex flex-col min-h-screen">
        <Navbar />
        {
          result.length === 0 &&
          <Header
            imageUrl={data.album.images[0].url}
            albumName={data.album.name}
          />
        }
        <UserPlaylist />
        <Tracks />
    </div>
  );
}

const AppContainer = () => {
  return (
    <ApiProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ApiProvider>
  )
}

export default AppContainer;
