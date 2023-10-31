import React from "react";
import PageTitle from "../../components/PageTitle";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/AddPlaylistSongs.css";
import AddItem from "../../components/playlist/AddItem";
import FilterButtom from "../../components/ButtonFilter";
import ButtonFilter from "../../components/ButtonFilter";

function AddPlaylistSongs() {
  return (
    <div className="wrapper-add-playlist-songs gradient-top">
      <div>
        <PageTitle goTo="/createplaylist/createby" title="PlaylistName" />
      </div>
      <div className="bar-padding">
        <SearchBar />
      </div>
      <div className="filters-buttons-add">
        <ButtonFilter txt="Rock" />
      </div>
      <AddItem name="Rosalaila" />
    </div>
  );
}

export default AddPlaylistSongs;
