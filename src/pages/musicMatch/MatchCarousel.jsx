import "../../styles/MatchCarousel.css";
export default function(props){
  return(
    <ul className="match-carousel">
      <li className="next-match"><img src={props.next}/></li>
      <li className="to-match"><img src={props.toMatch}/></li>
      {props.previous && (<li className="prev-match"><img src={props.previous}/></li>)}
    </ul>)
}
