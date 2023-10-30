import React from "react";
import PageTitle from "../../components/PageTitle";
import "../../styles/Settings.css";
import OrangeButton from "../../components/OrangeButton";

function Settings() {
  return (
    <div className="gradient-top wrapper-settings ">
      <div>
        <PageTitle goTo="/profile" title="Configuracion" />
        <main className="main-settings">
          <OrangeButton txt="Editar Apariencia" />
          <button className="black-button">Editar Perfil</button>
        </main>
      </div>
      <div>
        <div>
          <span className="center-version">Versión: V1.25.03</span>
        </div>
        <footer className="footer-settings">
          <span>Cerrar Sesion</span>
        </footer>
      </div>
    </div>
  );
}

export default Settings;
