import React, { useState } from "react";
import "../../styles/SearchBar.css";

function SearchBar({ handdleClick, changeIcon, handleBack, setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setInputValue(value);
  };
  const handleClearButton = (event) => {
    setSearchTerm("");
    setInputValue("");
  };
  return (
    <div className="input-search">
      {changeIcon ? (
        <div>
          <img src="search.svg" alt="" />
        </div>
      ) : (
        <div onClick={handleBack}>
          <img src="back.svg" alt="" />
        </div>
      )}
      <input
        onClick={handdleClick}
        value={inputValue}
        placeholder="Que deseas escuchar?"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      {inputValue.length > 0 && (
        <img onClick={handleClearButton} src="cross.svg" alt="" />
      )}
    </div>
  );
}
export default SearchBar;
