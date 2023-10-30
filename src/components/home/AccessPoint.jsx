import "../../styles/AccessPoint.css";
import { Link, useNavigate } from "react-router-dom";

function AccessPoint(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-acces">
        <div className="images">
          <img className="acces-img" src={props.img} alt="" />
        </div>
        <div className="article" onClick={() => navigate(props.goTo)}>
          <h3>{props.title}</h3>
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
}
export default AccessPoint;
