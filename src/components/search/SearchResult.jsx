import React, { useEffect, useState } from "react";
import "../../styles/SearchResults.css";
import SearchItem from "./SearchItem";
import SortButton from "./SortButton";
import SuggestedResult from "./SuggestedResult";

function SearchResult({ foundItems, ownPlaylists }) {
  const [option, setOption] = useState("");
  const [suggested, setSuggested] = useState([]);

  const capitalCase = (str) => {
    if (str) {
      const wordArr = str.split(" ");
      const capitalyzedArr = wordArr.map((n) => {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      });
      return capitalyzedArr.join("");
    }
  };

  const ArraySuggested = () => {
    const item = foundItems[option];
    const suggest = item[0];
    setSuggested(suggest);
  };
  return (
    <div>
      <div>
        <SortButton setOption={setOption} setSuggest={ArraySuggested} />
      </div>
      {option === "albums" && (
        <div>
          <div>
            <SuggestedResult
              img={`artists/${suggested.artist_id}.jpeg`}
              title={capitalCase(suggested.album_name)}
              name1="Album"
            />
          </div>
        </div>
      )}
      {option === "albums" && (
        <div className="results-search">
          {foundItems["albums"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.album_name)}
                  name1="Album"
                  name2={item.album_name}
                />
              </div>
            );
          })}
        </div>
      )}
      {option === "songs" && (
        <div className="results-search">
          {foundItems["songs"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.song_name)}
                  name1={item.album_name}
                  name2={item.artist_name}
                />
              </div>
            );
          })}
        </div>
      )}
      {option === "artist" && (
        <div className="results-search">
          {foundItems["artists"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.artist_name)}
                  name1="Artista"
                />
              </div>
            );
          })}
        </div>
      )}
      {option === "playlist" && (
        <div className="results-search">
          {ownPlaylists.map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.playlist_name)}
                  name1={item.playlist_name}
                  name2={item.artist_name}
                />
              </div>
            );
          })}
        </div>
      )}
      {option === "" && (
        <div className="results-search">
          {foundItems["artists"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.artist_name)}
                  name1="Artista"
                />
              </div>
            );
          })}
          {foundItems["albums"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.album_name)}
                  name1="Album"
                  name2={item.artist_name}
                />
              </div>
            );
          })}
          {foundItems["songs"].map((item, index) => {
            return (
              <div key={index}>
                <SearchItem
                  img={`artists/${item.artist_id}.jpeg`}
                  title={capitalCase(item.song_name)}
                  name1={item.artist_name}
                  name2={item.album_name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
