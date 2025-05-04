import "./Playlist.css";
import TrackList from "./TrackList";

function Playlist(props) {
  const handleChange = (e) => {
    props.onChangeName(e.target.value);
  };

  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <input
        className="playlist-name"
        type="text"
        placeholder="Playlist name"
        value={props.playlistName}
        onChange={handleChange}
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
