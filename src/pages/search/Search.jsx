import React, { useEffect, useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/search.css";
import NavBar from "../../components/home/NavBar";
import SearchResult from "../../components/search/SearchResult";
import { songs } from "../../API/Rule_Songs";
import TopTwenty from "../../components/search/TopTwenty";

export const Search = () => {
  // const [move, setMove] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await songs();
        setItems(response);
        setFoundItems(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSongs();
  }, []);

  // const handdleClick = () => {
  //   setMove(true);
  // };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredItems = items.filter(
      (item) =>
        item.song_name.includes(value.toUpperCase()) ||
        (value !== "" && item.song_name.includes(value.toUpperCase()))
    );
    setFoundItems(filteredItems);
    console.log(filteredItems);
  };

  return (
    <div className="wrapper-search gradient-top">
      <div className="search-container">
        <header className="header-search">
          <h1>Buscador</h1>
          <SearchBar handleSearch={handleSearch} resetSearch={setFoundItems} />
        </header>
        <main className="main-search">
          <TopTwenty />
          <div className="recents-container"></div>
          <SearchResult foundItems={foundItems} />
        </main>
      </div>
      <NavBar />
    </div>
  );
};
