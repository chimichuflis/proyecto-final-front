import React, { useState } from "react";
import "../../styles/SortButton.css";

export default function SortButton({
  onSort,
  tops,
  songs,
  albums,
  artists,
  playlists,
}) {
  const [ButtonActive, SetButtonActive] = useState(false);

  const handleSortByTop = () => {
    const sortedTops = [...tops];
    sortedTops.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    onSort(sortedTops);
    handleActive();
    console.log(sortedTops);
  };
  const handleSortByTSong = () => {
    const sortedSongs = [...songs];
    sortedTops.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    onSort(sortedSongs);
    SetButtonActive(true);
    console.log(sortedSongs);
  };
  const handleSortByAlbum = () => {
    const sortedTops = [...albums];
    sortedAlbums.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    onSort(sortedAlbums);
    SetButtonActive(true);
    console.log(sortedAlbums);
  };
  const handleSortByArtist = () => {
    const sortedArtists = [...artists];
    sortedArtists.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    onSort(sortedArtists);
    SetButtonActive(true);
    console.log(sortedArtists);
  };
  const handleSortByPlaylist = () => {
    const sortedPlaylists = [...playlists];
    sortedPlaylists.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    onSort(sortedPlaylists);
    SetButtonActive(true);
    console.log(sortedPlaylists);
  };
  return (
    <div className="sort-wrapper">
      <div onClick={handleSortByTop} className="sort-btn">
        <span>Top</span>
      </div>
      <div onClick={handleSortByTSong} className="sort-btn">
        <span>Canciones</span>
      </div>
      <div onClick={handleSortByAlbum} className="sort-btn">
        <span>Albumes</span>
      </div>
      <div onClick={handleSortByArtist} className="sort-btn">
        <span>Artistas</span>
      </div>
      <div onClick={handleSortByPlaylist} className="sort-btn">
        <span>Playlists</span>
      </div>
    </div>
  );
}
