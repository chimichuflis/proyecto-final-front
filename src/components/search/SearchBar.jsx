import React, { useState } from "react";
import "../../styles/SearchBar.css";

function SearchBar(handleSearch, resetSearch, handdleClick) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    handleSearch(value);
  };
  const handleClearButton = (event) => {
    setSearchTerm("");
    resetsearch([]);
  };
  return (
    <div onClick={handdleClick} className="input-search">
      <div>
        <img src="search.svg" alt="" />
      </div>
      <input
        value={searchTerm}
        placeholder="Que deseas escuchar?"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      {searchTerm.length > 0 && (
        <img onClick={handleClearButton} src="cross.svg" alt="" />
      )}
    </div>
  );
}
export default SearchBar;
