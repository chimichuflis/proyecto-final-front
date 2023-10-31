import { Link } from "react-router-dom";
import "../styles/PageTitle.css";

export default function (props) {
  return (
    <header className="page-title ani-left-enter">
      <Link to={props.goTo}>
        <img src="/back.svg" />
      </Link>
      <div>
        <span>{props.subtitle}</span>
        <h2>{props.title}</h2>
      </div>
      {location.pathname == "/playlistgenerated" ? (
        <img src="/options.svg" alt="" />
      ) : null}
    </header>
  );
}
