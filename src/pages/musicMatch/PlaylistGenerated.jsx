import React from "react";
import PlaylistCover from "../../components/profile/PlaylistCover";
import "../../styles/PlaylistGenerated.css";
import AddItem from "../../components/playlist/AddItem";
import NavBar from "../../components/home/NavBar";
import PageTitle from "../../components/PageTitle";
function PlaylistGenerated() {
  return (
    <div className="wrapper-playlist-generated gradient-top">
      <PageTitle
        title="Playlist Generada"
        subtitle="Generada del Cupido Musical"
      />
      <div className="center-covers ani-right-enter">
        <PlaylistCover
          img1="/artists/1.jpeg"
          img2="/artists/2.jpeg"
          img3="/artists/3.jpeg"
          img4="/artists/4.jpeg"
        />
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
          <div item-pg>
            <AddItem
              img="/artists/1.jpeg"
              title="Cancion de playlist"
              name="artista"
            />
          </div>
        </div>
      </main>
      <NavBar />
    </div>
  );
}

export default PlaylistGenerated;
