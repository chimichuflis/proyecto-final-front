import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Input from "../../components/Input";
import OrangeButton from "../../components/OrangeButton";
import { createPlaylists } from "../../API/Rule_playlist";
import { jwtDecode } from "jwt-decode";

function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const token = localStorage.getItem("token");
  const payload = jwtDecode(token);
  const navigate = useNavigate();
  useEffect(() => {
    async function createNewPlaylist(playlist_name, user_id) {
      try {
        const response = await createPlaylists({
          playlist_name,
          user_id,
        });
        console.log(response);
        console.log(user_id);
      } catch (err) {
        console.log(err);
      }
    }
    createNewPlaylist(playlistName, payload.id);
  }, [playlistName]);
  const handleClick = () => {
    navigate("/createplaylist/createby");
  };

  return (
    <div>
      <div className="register-container gradient-top ">
        <div className="register-wrapper">
          <PageTitle goTo="/profile" title="Crear Playlist" />
          <div className="register-span ani-right-enter">
            <span>¿Como se llamara tu playlist?</span>
          </div>
          <div className="register-input-container">
            <div className="register-email-input ani-left-enter">
              <Input
                setter={setPlaylistName}
                name="Nombre de la Playlist:"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="register-button-container ani-right-enter">
          <OrangeButton postLogin={handleClick} txt="Continuar" />
        </div>
      </div>
    </div>
  );
}
export default CreatePlaylist;
