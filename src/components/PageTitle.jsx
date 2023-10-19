import {Link} from "react-router-dom";

import backLogo from "../../public/back.svg";
import "../styles/PageTitle.css";
export default function(props){
  return (
    <header className="page-title">
      <Link to="/"><img src={backLogo}/></Link><h2>{props.title}</h2>
    </header>
  )
}
