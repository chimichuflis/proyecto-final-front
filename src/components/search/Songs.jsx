import React from "react";
import "../../styles/Songs.css";
import { Link } from "react-router-dom";

function Songs(props) {
  return (
    <>
      <Link
        to={`/search//${props.id}`}
        style={{ textDecoration: "none", color: "#212121" }}
      >
        <div className="song-wrapper">
          <img className="" src={props.image} alt="" />
          <div>
            <span>
              <b>{props.song}</b>
            </span>
            <span className="song-artist">{props.artist}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Songs;
