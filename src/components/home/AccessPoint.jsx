import "../../styles/AccessPoint.css";

function AccessPoint(props) {
  return (
    <>
      <div className="container-acces">
        <div className="images">
          <img src="" alt="" />
        </div>
        <div className="article">
          <h3>{props.title}</h3>
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
}
export default AccessPoint;
