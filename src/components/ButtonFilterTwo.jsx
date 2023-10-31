import React from "react";
import "../styles/ButtonFilter.css";

function ButtonFilterTwo(props) {
    return (
        <div>
            <label className="filter-btn">
                <input type="checkbox" name="filter-btn" onClick={props.handleClick} value={props.filterId} onChange={props.changeFunc} />
                <p>{props.txt}</p>
            </label>
        </div>
    );
}

export default ButtonFilterTwo;

