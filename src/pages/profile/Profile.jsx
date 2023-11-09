import React, { useState, useEffect } from "react";
import NavBar from "../../components/home/NavBar";
import "../../styles/Profile.css";
import PlaylistCover from "../../components/profile/PlaylistCover";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { allPlaylists } from "../../API/Rule_playlist";

function Profile() {
  const token = localStorage.getItem("token");
  const payload = jwtDecode(token);
  console.log(payload);
  const [ownPlaylists, setOwnPlaylists] = useState([]);

  useEffect(() => {
    const getPLaylists = async () => {
      try {
        const response = await allPlaylists();
        console.log(response);
        setOwnPlaylists(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPLaylists();
  }, []);
  console.log(ownPlaylists, "aca");
  return (
    <div className="gradient-top wrapper-profile">
      <header>
        <div className="info-profile">
          <img className="profile-img" src="/artists/1.jpeg" alt="" />
          <div className="name-user-profile">
            <h1>{payload.name}</h1>
            <span>{payload.email}</span>
          </div>
          <Link link to="/settings">
            <div className="icon-container">
              <img className="setting-icon" src="/setting.svg" alt="" />
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="section-playlist-ptofile">
          <span>Mis Playlists</span>
          <div className="mid-line-profile"></div>
          <Link link to="/createplaylist" className="appearence-none">
            <label className="btn-create-playlist">
              <input type="radio" />
              <p>Crear Playlist</p>
            </label>
          </Link>
        </div>

        <div className="wrap-covers-profile">
          {ownPlaylists.map((item, index) => {
            return (
              <Link link to={`/playlistgenerated/${item.playlist_id}`}>
                <PlaylistCover key={item.playlist_id} id={item.playlist_id} />
              </Link>
            );
          })}
        </div>
      </main>
      <NavBar />
    </div>
  );
}

export default Profile;
