import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

function NavBar() {
  return (
    <div className="container-nav">
      <div className="icon">
        <Link className="link" to={"/"}>
          <div className="btn">
            <img src="../../public/home.svg" alt="" />
            <span>Inicio</span>
          </div>
        </Link>
      </div>
      <div className="icon">
        <Link className="link" to={"/search"}>
          <div className="btn">
            <img src="../../public/search.svg" alt="" />
            <span>Buscador</span>
          </div>
        </Link>
      </div>
      <div className="icon">
        <Link className="link" to={"/profile"}>
          <div className="btn">
            <img src="../../public/user.svg" alt="" />
            <span>Perfil</span>
          </div>
        </Link>
      </div>
      <div className="icon">
        <Link className="link" to={"/"}>
          <div className="btn">
            <img src="../../public/friends.svg" alt="" />
            <span>Amigos</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
