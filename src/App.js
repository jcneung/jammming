import "./App.css";
import { tracks } from "./data";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Playlist from "./Playlist";

document.title = "Jammming";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addTrack = (track) => {
    if (playlist.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylist((prevPlaylist) => {
      return [...prevPlaylist, track];
    });
  };

  const removeTrack = (track) => {
    setPlaylist((prevPlaylist) => {
      return prevPlaylist.filter((current) => current.id !== track.id);
    });
  };

  const searchHandle = (word) => {
    setSearchResult(tracks);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={searchHandle} />
      <div className="container">
        <SearchResult tracks={searchResult} onAdd={addTrack} />
        <Playlist tracks={playlist} onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;
