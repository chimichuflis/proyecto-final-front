import React from "react";
import "../../styles/SearchItem.css";

function SearchItem(props) {
  return (
    <div className="wrapper-item">
      <div className="img-item">
        <img src={props.img} alt="" />
      </div>
      <div className="wrapper-title-artist">
        <h4> {props.title}</h4>
        <div className="subtitle-item">
          <span className="name1-item">{props.name1}</span>
          <div className="border-left">
            <span>{props.name2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
