import React from "react";
import "../../styles/PlaylistCover.css";

function PlaylistCover(props) {
  return (
    <div
      className={
        location.pathname == "/playlistgenerated"
          ? "wrapper-playlist-cover-pg"
          : "wrapper-playlist-cover"
      }
    >
      <div
        className={
          location.pathname == "/playlistgenerated"
            ? "wrapper-imgs-playlist-cover-pg"
            : "wrapper-imgs-playlist-cover"
        }
      >
        <img src={props.img1} alt="" />
        <img id="border1" src={props.img2} alt="" />
        <img id="border2" src={props.img3} alt="" />
        <img src={props.img4} alt="" />
      </div>
      <div className="cover-name">
        <span></span>
        <span className="song-artist"></span>
      </div>
    </div>
  );
}

export default PlaylistCover;
