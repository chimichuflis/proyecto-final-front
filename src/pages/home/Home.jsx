import AccessPoint from "../../components/home/AccessPoint";
import "../../styles/home.css";

function Home() {
  return (
    <div className="wrapper-home">
      <header className="home-header">
        <h1>Musica ya</h1>
        <div className="icons-home">
          <img src="../../public/Vector.svg" alt="" />
          <img src="../../public/bell.svg" alt="" />
        </div>
      </header>
      <div className="container-access">
        <AccessPoint
          title="Cupido Musical"
          text="Tus artistas favoritos nunca van a dejarte con el corazon roto"
        ></AccessPoint>
        <AccessPoint
          title="Musica Contextual"
          text="Creamos la playlist perfecta para cualquier situcion"
        ></AccessPoint>
      </div>
    </div>
  );
}

export default Home;
