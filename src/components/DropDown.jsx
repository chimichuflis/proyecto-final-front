import "../styles/Dropdown.css";
import React, { useState } from 'react';

function Dropdown(props) {
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = props.options.find(option => option[props.selector + "_id"].toString() === selectedValue);

        if (props.onSelect) {
            props.onSelect(selectedOption);
        }
    };

    return (
        <div className="dropdown">
            <select className="dropdown-header" value={props.selectedOption ? props.selectedOption[props.selector + "_id"].toString() : ''} onChange={handleOptionChange}>
                <option disabled hidden selected value=""> {props.dropname}</option>
                {props.options.map(option => (
                    <option key={option[props.selector + "_id"]} value={option[props.selector + "_id"]}>
                        {option[props.selector + "_name"]}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
