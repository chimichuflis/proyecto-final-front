import React from "react";
import "../../styles/PlaylistCover.css";

function PlaylistCover({ playlist }) {
  return (
    <div
      className={
        location.pathname == "/playlistgenerated"
          ? "wrapper-playlist-cover-pg"
          : "wrapper-playlist-cover"
      }
    >
      {playlist.map((item, index) => {
        return (
          <div
            key={index}
            className={
              location.pathname == "/playlistgenerated"
                ? "wrapper-imgs-playlist-cover-pg"
                : "wrapper-imgs-playlist-cover"
            }
          >
            <img src={`/artists/${item.artist_id}.jpeg`} alt="" />
          </div>
        );
      })}
      <div className="cover-name">
        <span></span>
        <span className="song-artist"></span>
      </div>
    </div>
  );
}

export default PlaylistCover;
