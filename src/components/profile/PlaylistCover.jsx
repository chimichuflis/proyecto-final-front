import React from "react";
import "../../styles/PlaylistCover.css";

function PlaylistCover() {
  return (
    <div className="wrapper-playlist-cover">
      <div className="wrapper-imgs-playlist-cover">
        <img src="/artists/1.jpeg" alt="" />
        <img id="border1" src="/artists/2.jpeg" alt="" />
        <img id="border2" src="/artists/4.jpeg" alt="" />
        <img src="/artists/3.jpeg" alt="" />
      </div>
      <div className="cover-name">
        <span>playlist_name</span>
        <span className="song-artist">name</span>
      </div>
    </div>
  );
}

export default PlaylistCover;
