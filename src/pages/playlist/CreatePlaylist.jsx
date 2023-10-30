import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Input from "../../components/Input";
import OrangeButton from "../../components/OrangeButton";
import CreateBy from "./CreateBy";

function CreatePlaylist() {
  const [playlistOk, setPlaylistOk] = useState(false);
  const [playlist, setPlaylist] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function availablePlaylist() {
      try {
        const response = await available(playlist);
        setEmailValid(response.validity);
        setEmailMsg(response.msg);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    if (playlistOk) {
      availablePlaylist();
      setNext(true);
    }
  }, [playlist]);
  const registerPlaylist = () => {
    localStorage.setItem("registerPlaylist", playlist);
    setNext(false);
  };
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
                setter={setPlaylist}
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
