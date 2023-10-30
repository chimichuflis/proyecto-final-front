import React from "react";
import NavBar from "../../components/home/NavBar";
import "../../styles/Profile.css";
import PlaylistCover from "../../components/profile/PlaylistCover";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const token = localStorage.getItem("token");
  const payload = jwtDecode(token);
  console.log(payload);

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
          <Link link to="/createplaylist" className="link">
            <label className="btn-create-playlist">
              <input type="radio" />
              <p>Crear Playlist</p>
            </label>
          </Link>
        </div>
        <div>
          <PlaylistCover />
        </div>
      </main>
      <NavBar />
    </div>
  );
}

export default Profile;
