import { Link } from "react-router-dom";
import "../styles/PageTitle.css";

export default function (props) {
  return (
<<<<<<< HEAD
    <header className="page-title">
      <Link to={props.goTo}><img src="./back.svg"/></Link><h2>{props.title}</h2>
=======
    <header className="page-title ani-left-enter">
      <Link to="/"><img src="./back.svg" /></Link><h2>{props.title}</h2>
>>>>>>> f816dc35f00bf51703a096c6fac947947eef44f2
    </header>
  )
}
