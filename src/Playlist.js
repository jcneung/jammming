import "./Playlist.css";
import TrackList from "./TrackList";

function Playlist(props) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <input
        className="playlist-name"
        type="text"
        placeholder="Playlist name"
      />
      <TrackList
        tracks={props.tracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="save-button" type="button">
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
