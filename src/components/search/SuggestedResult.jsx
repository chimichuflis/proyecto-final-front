import React from "react";
import "../../styles/SuggestedResult.css";

function SuggestedResult(props) {
  return (
    <div className="wrapper-sggted">
      <span className="tittle-sggted">Resultado Sugerido:</span>
      <div className="wrapper-item-sggted">
        <div className="img-suggest">
          <img src={props.img} alt="" />
        </div>
        <div className="wrapper-title-artist">
          <h4> {props.title}</h4>
          <div className="subtitle-item">
            <span className="name1-item">{props.name1}</span>
          </div>
        </div>
      </div>
      <div className="line-bottom-sgtd"></div>
    </div>
  );
}

export default SuggestedResult;
