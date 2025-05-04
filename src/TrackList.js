import "./TrackList.css";
import Track from "./Track";

function TrackList(props) {
  return (
    <div>
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            isRemoval={props.isRemoval}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
