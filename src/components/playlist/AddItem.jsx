import React from "react";
import "../../styles/AddItem.css";

function AddItem(props) {
  return (
    <div className="wrapper-item-add">
      <div className="container-without-cross">
        <div className="img-item-add">
          <img src={props.img} alt="" />
        </div>
        <div className="wrapper-title-artist-add">
          <h4> {props.title}</h4>
          <div className="subtitle-item-add">
            <span>{props.name}</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={
            location.pathname.indexOf("playlistgenerated") >= 0
              ? "/options.svg"
              : "/crossAdd.svg"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default AddItem;
