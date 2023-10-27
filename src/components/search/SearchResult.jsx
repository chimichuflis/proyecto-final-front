import React from "react";
import "../../styles/SearchResults.css";
import SearchItem from "./SearchItem";
import SortButton from "./SortButton";

function SearchResult(props) {
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
    <div>
      <div>
        <SortButton />
      </div>
      {props.foundItems.map((item, index) => {
        return (
          <div key={index} className="results-search">
            <SearchItem
              img={props.img}
              title={capitalCase(item.song_name)}
              name1={capitalCase(item.album_name)}
              name2={capitalCase(item.artist_name)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
