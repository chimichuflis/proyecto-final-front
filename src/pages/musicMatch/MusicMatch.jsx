import PageTitle from "../../components/PageTitle.jsx";
import MatchCarousel from "./MatchCarousel.jsx";
import "../../styles/MusicMatch.css";

export default function(){
  const  artistArr = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg"
  ]
  return(
    <div className="music-match gradient-top">
      <PageTitle title="Cupido Musical"/>
      <MatchCarousel next={`artists/${artistArr[0]}`} toMatch={`artists/${artistArr[1]}`} artistName={"Olivia Rodrigo"}/>
      <button>Crear Playlist</button>
    </div>)
}
