import "../styles/Dropdown.css";
import React, { useState } from 'react';

function Dropdown(props) {
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = props.options.find(option => option[props.selector + "_id"].toString() === selectedValue);
        event.target.blur()
        if (props.onSelect) {
            props.onSelect(selectedOption);
        }
    };
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
            <select className="dropdown-header" value={props.selectedOption ? props.selectedOption[props.selector + "_id"].toString() : ''} onChange={handleOptionChange}>
                <option disabled hidden value=""> {props.dropname}</option>
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
