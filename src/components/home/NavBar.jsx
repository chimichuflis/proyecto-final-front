import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/NavBar.css";

function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="container-nav">
      <div>
        <Link className="link" to={"/home/"}>
          <div className={location.pathname == "/home/" ? "selected" : "btn"}>
            <img src="../../public/home.svg" alt="" />
            <span>Inicio</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className="link" to={"/match/"}>
          <div className={location.pathname == "/match/" ? "selected" : "btn"}>
            <img src="../../public/search.svg" alt="" />
            <span>Buscador</span>
          </div>
        </Link>
      </div>
      <div className={location.pathname === "/profile" ? "selected" : ""}>
        <Link className="link" to={"/profile"}>
          <div className="btn">
            <img src="../../public/user.svg" alt="" />
            <span>Perfil</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className="link" to={"/"}>
          <div
            className={location.pathname === "/friends" ? "selected" : "btn"}
          >
            <img src="../../public/friends.svg" alt="" />
            <span>Amigos</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
