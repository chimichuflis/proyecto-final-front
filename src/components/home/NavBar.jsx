import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/NavBar.css";

function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="container-nav nav-end">
      <div>
        <Link className="link-nav" to={"/home/"}>
          <div
            className={
              location.pathname.indexOf("home") >= 0 ? "selected" : "btn"
            }
          >
            <img
              src={
                location.pathname.indexOf("home") >= 0
                  ? "../../public/home-black.svg"
                  : "../../public/home.svg"
              }
            />
            <span>Inicio</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className="link-nav" to={"/search"}>
          <div className={location.pathname == "/search" ? "selected" : "btn"}>
            <img
              src={
                location.pathname == "/search"
                  ? "../../public/search-black.svg"
                  : "../../public/search.svg"
              }
            />
            <span>Buscador</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className="link-nav" to={"/profile/"}>
          <div
            className={location.pathname == "/profile/" ? "selected" : "btn"}
          >
            <img
              src={
                location.pathname == "/profile/"
                  ? "../../public/user-black.svg"
                  : "../../public/user.svg"
              }
            />
            <span>Perfil</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className="link-nav" to={"/friends/"}>
          <div
            className={location.pathname === "/friends/" ? "selected" : "btn"}
          >
            <img
              src={
                location.pathname == "/friends/"
                  ? "../../public/friends-black.svg"
                  : "../../public/friends.svg"
              }
              alt=""
            />
            <span>Amigos</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
