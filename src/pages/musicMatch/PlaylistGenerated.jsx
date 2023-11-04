import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistCover from "../../components/profile/PlaylistCover";
import "../../styles/PlaylistGenerated.css";
import AddItem from "../../components/playlist/AddItem";
import NavBar from "../../components/home/NavBar";
import PageTitle from "../../components/PageTitle";
import { playlists } from "../../API/Rule_playlist";

function PlaylistGenerated() {
  const [newPlaylist, setNewPlaylist] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPLaylists = async () => {
      try {
        const response = await playlists(`/${id}`);
        console.log(response);
        setNewPlaylist(response);
        console.log(newPlaylist);
      } catch (error) {
        console.log(error);
      }
    };
    getPLaylists();
  }, []);

  return (
    <div className="wrapper-playlist-generated gradient-top">
      <PageTitle
        goTo="/home"
        title={newPlaylist.slice(0).playlist_name}
        subtitle="Generada del Cupido Musical"
      />
      <div className="center-covers">
        <PlaylistCover playlist={newPlaylist.slice(0, 4)} />
      </div>
      <section className="wrapper-icons-pg ani-left-enter">
        <div className="row-icons ">
          <img src="/logo-small.svg" alt="" />
          <img id="small-icon1" src="/verified.svg" alt="" />
          <img src="/share.svg" alt="" />
        </div>
        <div className="row-icons flex-span">
          <span>1h 19m</span>
          <img id="small-icon2" src="/clock.svg" alt="" />
        </div>
      </section>
      <section className="wrapper-icons-pg ani-right-enter">
        <div className="row-icons flex-span-start">
          <img src="/copy.svg" alt="" />
          <span>Crear Copia</span>
        </div>
        <div className="row-icons">
          <img src="/shuffle.svg" alt="" />
          <img id="btn-play" src="/play-btn.svg" alt="" />
        </div>
      </section>
      <main className="ani-left-enter">
        <div className="list-songs-pg">
          {newPlaylist.map((item, index) => {
            return (
              <div item-pg>
                <AddItem
                  img={`/artists/${item.artist_id}.jpeg`}
                  title={item.song_name}
                  name={item.artist_name}
                />
              </div>
            );
          })}
        </div>
      </main>
      <NavBar />
    </div>
  );
}

export default PlaylistGenerated;
