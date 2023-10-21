import {Link} from "react-router-dom";
import "../styles/PageTitle.css";

export default function(props){
  return (
    <header className="page-title">
      <Link to="/"><img src="./back.svg"/></Link><h2>{props.title}</h2>
    </header>
  )
}
