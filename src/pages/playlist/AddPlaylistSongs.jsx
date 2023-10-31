import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/AddPlaylistSongs.css";
import AddItem from "../../components/playlist/AddItem";
import FilterButtom from "../../components/ButtonFilter";
import ButtonFilter from "../../components/ButtonFilter";
import { searchApi } from "../../API/Rule_search";

function AddPlaylistSongs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [foundItems, setFoundItems] = useState({
    songs: [],
    artists: [],
    albums: [],
  });

  const capitalCase = (str) => {
    if (str) {
      const wordArr = str.split(" ");
      const capitalyzedArr = wordArr.map((n) => {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      });
      return capitalyzedArr.join("");
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const getSearch = async () => {
        try {
          const response = await searchApi(searchTerm);

          setFoundItems(response);
        } catch (error) {
          console.log(error);
        }
      };
      getSearch();
    }
  }, [searchTerm]);

  return (
    <div className="wrapper-add-playlist-songs gradient-top">
      <div>
        <PageTitle goTo="/createplaylist/createby" title="PlaylistName" />
      </div>
      <div className="bar-padding">
        <SearchBar setSearchTerm={setSearchTerm} inputValue={setInputValue} />
      </div>
      <div className="filters-buttons-add">
        <ButtonFilter txt="Rock" />
      </div>
      {foundItems["songs"].map((item, index) => {
        return (
          <div key={index}>
            <AddItem
              img={`artists/${item.artist_id}.jpeg`}
              title={capitalCase(item.song_name)}
              name={item.artist_name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AddPlaylistSongs;
