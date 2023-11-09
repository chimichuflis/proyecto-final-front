import React, { useEffect, useState } from "react";
import "../../styles/PlaylistCover.css";
import { playlists } from "../../API/Rule_playlist";

function PlaylistCover({ id, name }) {
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist);

  useEffect(() => {
    const getPLaylists = async () => {
      try {
        const response = await playlists(`/${id}`);
        console.log(response);
        response > [1] && setPlaylist(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPLaylists();
  }, []);

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
        {playlist.slice(0, 4).map((item, index) => {
          return (
            <div key={index}>
              <img src={`/artists/${item.artist_id}.jpeg`} alt="" />
            </div>
          );
        })}
      </div>
      <div className="cover-name">
        <span>{name}</span>
        <span className="song-artist"></span>
      </div>
    </div>
  );
}

export default PlaylistCover;
