import React from "react";
import "../../styles/SearchResults.css";
import SearchItem from "./SearchItem";
import SortButton from "./SortButton";

function SearchResult(img, foundItems) {
  return (
    <div>
      <div>
        <SortButton />
      </div>
      {foundItems.map((item, index) => {
        return (
          <div className="results-search">
            <SearchItem
              key={index}
              img={img}
              title={item.name}
              name1={item.artist}
              name2={item.album}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
