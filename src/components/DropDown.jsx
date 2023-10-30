import "../styles/Dropdown.css";
import React, { useState } from 'react';

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (props.onSelect) {
            props.onSelect(option);
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.name : props.dropname}
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {props.options.map((option) => (
                        <li key={option[props.selector + "_id"]} onClick={() => handleOptionClick(option)}>
                            {option[props.selector + "_name"]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;