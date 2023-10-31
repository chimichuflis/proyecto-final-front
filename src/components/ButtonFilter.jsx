import React from "react";
import "../styles/ButtonFilter.css";

function ButtonFilter(props) {
  return (
    <div>
      <label className="filter-btn">
        <input type="radio" name="filter-btn" onClick={props.handleClick} />
        <p>{props.txt}</p>
      </label>
    </div>
  );
}

export default ButtonFilter;
