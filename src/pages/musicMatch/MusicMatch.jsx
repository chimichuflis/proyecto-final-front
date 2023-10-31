import {getMatches} from "../../API/Rule_Match.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import MatchCarousel from "./MatchCarousel.jsx";
import {useState, useEffect} from "react";
import "../../styles/MusicMatch.css";

export default function(){
  
  const [matchList, setMatchList] = useState([]);
  const [likedList, setLikedList] = useState([]);

  const getMatchList = async ()=>{
    const result = await getMatches();
    setMatchList([...matchList, ...result.artists]);
  }

  useEffect(()=>{
    if(matchList.length<3){
        getMatchList();
    }
  },[matchList])

  const likeDislike = (like)=>{
    if(like){
      const checkRepeated = likedList.find(n=>{
        if(n.artist_id==matchList[0].artist_id){
          return true
        }else{
          return false
        }
      });
      if(!checkRepeated){
        setLikedList([...likedList,matchList[0]]);
      }
    }
    setMatchList(matchList.slice(1));
  }

  return(
    <div className="music-match gradient-top">
      <PageTitle title="Cupido Musical" goTo="/home"/>
      <MatchCarousel func={likeDislike} list={[...matchList]}/>
      
      <ul className="matched-list">
      {likedList.map((goodMatch,index)=>{
        return(
          <li key={index}>
            <img src={`artists/${goodMatch.artist_id}.jpeg`}/>
          </li>
        )
      })}
      </ul>
      
      <button className="playlistbtn" >Crear Playlist</button>
    </div>)
}
