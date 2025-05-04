import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const removeTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="track-button" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="track-button" onClick={addTrack}>
          +
        </button>
      );
    }
  };

  return (
    <div className="track">
      <div className="track-info">
        <p className="track-name">{props.track.name}</p>
        <p className="track-desc">
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
