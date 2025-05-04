import "./App.css";
import { tracks } from "./data";
import SearchBar from "./SearchBar";
import Track from "./Track";

document.title = "Jammming";

function App() {
  const addTrack = (track) => {
    alert(`I add ${JSON.stringify(track)}`);
  };

  const removeTrack = (track) => {
    alert(`I remove ${JSON.stringify(track)}`);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            isRemoval={true}
            onAdd={addTrack}
            onRemove={removeTrack}
          />
        );
      })}
    </div>
  );
}

export default App;
