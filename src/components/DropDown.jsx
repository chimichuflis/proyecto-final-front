import "../styles/Dropdown.css";
import React, { useState } from 'react';

function Dropdown(props) {
    const capitalCase = (str) => {
        if (str) {
            const wordArr = str.split(" ");
            const capitalyzedArr = wordArr.map((n) => {
                return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
            });
            return capitalyzedArr.join(" ");
        }
    };

    return (
        <div className="dropdown">
            <select key={props.selector} name={props.selector} className="dropdown-header" onChange={props.onSelect}>
                <option hidden selected value=""> {props.dropname}</option>
                {props.options.map(option => (
                    <option key={option[props.selector + "_id"]} value={option[props.selector + "_id"]}>
                        {capitalCase(option[props.selector + "_name"])}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
