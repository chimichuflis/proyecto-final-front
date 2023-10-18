import {Link} from "react-router-dom";

import backLogo from "../../public/back.svg";
export default function(props){
  return (
    <header>
      <Link to="/"><img src={backLogo}/></Link><h2>{props.title}</h2>
    </header>
  )
}
