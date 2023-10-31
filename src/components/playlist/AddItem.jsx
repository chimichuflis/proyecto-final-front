import React from "react";
import "../../styles/AddItem.css";

function AddItem(props) {
  return (
    <div className="wrapper-item-add">
      <div>
        <div className="img-item-add">
          <img src={props.img} alt="" />
        </div>
        <div className="wrapper-title-artist-add">
          <h4> {props.title}</h4>
          <div className="subtitle-item-add">
            <span className="name-item-add">{props.name}</span>
          </div>
        </div>
      </div>
      <div>
        <img src="crossAdd.svg" alt="" />
      </div>
    </div>
  );
}

export default AddItem;
