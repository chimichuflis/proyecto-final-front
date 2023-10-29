import React, { useState } from "react";
import "../../styles/SortButton.css";

export default function SortButton({
  onSort,
  tops,
  songs,
  albums,
  artists,
  playlists,
  setOption,
  setSuggest,
}) {
  const [ButtonActive, SetButtonActive] = useState(false);

  const handleActive = () => {
    SetButtonActive(true);
    console.log(ButtonActive);
  };

  const handleSortByAlbums = () => {
    console.log(setOption);
    setOption("albums");
    setSuggest();
  };
  const handleSortByArtist = () => {
    setOption("artist");
  };
  const handleSortBySongs = () => {
    setOption("songs");
  };
  const handleSortByPlaylist = () => {
    setOption("playlist");
  };

  return (
    <div className="sort-wrapper">
      <label className="sort-btn">
        <input type="radio" name="sortButton" />
        <p>Top</p>
      </label>
      <label className="sort-btn">
        <input type="radio" name="sortButton" onClick={handleSortByAlbums} />
        <p>Albums</p>
      </label>
      <label className="sort-btn">
        <input type="radio" name="sortButton" onClick={handleSortBySongs} />
        <p>Canciones</p>
      </label>
      <label className="sort-btn">
        <input type="radio" name="sortButton" onClick={handleSortByArtist} />
        <p>Artistas</p>
      </label>
      <label className="sort-btn">
        <input type="radio" name="sortButton" onClick={handleSortByPlaylist} />
        <p>Playlists</p>
      </label>
    </div>
  );
}
