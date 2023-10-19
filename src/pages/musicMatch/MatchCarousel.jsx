import {useEffect} from "react";
import "../../styles/MatchCarousel.css";
export default function(props){
  useEffect(()=>{
    let x = 0;
    const dragStart = (e)=>{
      x=e.clientX;
    }
    const dragEnd = (e)=>{
      const movement = e.clientX-x;
      if(Math.abs(movement)>50){
        if(movement<0){
          console.log("Liked");
        }else{
          console.log("Disliked");
        }
      }else{
        console.log("no action");
      }
    }
    const matchImg = document.querySelector(".match-carousel .to-match");
    matchImg.addEventListener("dragstart",dragStart);
    matchImg.addEventListener("dragend",dragEnd);
    return()=>{
      matchImg.removeEventListener("dragstart",dragStart);
      matchImg.removeEventListener("dragend",dragEnd);
    }
  },[]);
  return(
    <ul className="match-carousel">
      <li className="next-match"><img src={props.next}/></li>
      <li draggable="true" className="to-match"><img src={props.toMatch}/></li>
      {props.previous && (<li className="prev-match"><img src={props.previous}/></li>)}
    </ul>)
}
