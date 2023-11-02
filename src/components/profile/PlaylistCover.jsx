import React from "react";
import "../../styles/PlaylistCover.css";

function PlaylistCover({ playlist }) {
  return (
    <div
      className={
        location.pathname.indexOf("playlistgenerated") >= 0
          ? "wrapper-playlist-cover-pg"
          : "wrapper-playlist-cover"
      }
    >
      <div
        className={
          location.pathname.indexOf("playlistgenerated") >= 0
            ? "wrapper-imgs-playlist-cover-pg"
            : "wrapper-imgs-playlist-cover"
        }
      >
        {playlist?.map((item, index) => {
          return (
            <div key={index}>
              <img src={`/artists/${item.artist_id}.jpeg`} alt="" />
            </div>
          );
        })}
      </div>
      <div className="cover-name">
        <span></span>
        <span className="song-artist"></span>
      </div>
    </div>
  );
}

export default PlaylistCover;
