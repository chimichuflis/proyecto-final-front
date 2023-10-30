import React from "react";
import "../../styles/CreateBy.css";
import OrangeButton from "../../components/OrangeButton";
import NavBar from "../../components/home/NavBar";
import PageTitle from "../../components/PageTitle";

function CreateBy(props) {
  return (
    <div className="wrapper-by gradient-top">
      <PageTitle goTo="/createplaylist" title="PlaylistName" />
      <div className="title-by">
        <span>Creada por:</span>
        <img src="/AddFriend.svg" alt="" />
      </div>
      <div className="wrapper-user-by">
        <div className="img-user">
          <img src="/artists/2.jpeg" alt="" />
        </div>
        <div className="wrapper-user-name">
          <h4> Creador</h4>
          <div className="subtitle-user">
            <span className="date-hour">30/10/23 12:52hs</span>
          </div>
        </div>
      </div>
      <div className="line-bottom-by"></div>
      <main className="main-by">
        <div className="center-title-by">
          <span>¿Que esperas?</span>
          <span>Hagamos crecer tu playlist</span>
        </div>
        <OrangeButton txt="Añadir canciones" />
      </main>
      <NavBar />
    </div>
  );
}

export default CreateBy;
