import "./SearchResult.css";
import TrackList from "./TrackList";

function SearchResult(props) {
  return (
    <div className="search-result">
      <h2>Results</h2>
      <TrackList tracks={props.tracks} onAdd={props.onAdd} />
    </div>
  );
}

export default SearchResult;
