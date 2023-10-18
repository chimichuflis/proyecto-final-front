import PageTitle from "../../components/PageTitle.jsx";
import MatchCarousel from "./MatchCarousel.jsx";
import "../../styles/MusicMatch.css";

export default function(){
  return(<>
    <PageTitle title="Cupido Musical"/>
    <MatchCarousel next="eye.svg" toMatch="loader.svg" previous="back.svg"/>
    <button>Crear Playlist</button>

  </>)
}
