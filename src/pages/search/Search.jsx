import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/search.css";
import NavBar from "../../components/home/NavBar";
import Songs from "../../components/search/Songs";
import SearchResult from "../../components/search/SearchResult";

function Search() {
  const [move, setMove] = useState(false);
  const [items, setItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  const handdleClick = () => {
    setMove(true);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        (value !== "" && item.name.includes(value))
    );
    setFoundItems(filteredItems);
  };

  return (
    <div className="wrapper-search gradient-top">
      <div className="search-container">
        <header className="header-search">
          {move ? null : <h1>Buscador</h1>}
          <SearchBar OnClick={handdleClick} />
        </header>
        <main>
          {/* <div className="subtitle-search">
            <h4>Top 20s</h4>
            <div className="line"></div>
          </div>
          <div className="songs-container">
            <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
            <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
            <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
            <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
            <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
          </div>
          <div className="recents-container"></div> */}
          <SearchResult foundItems={foundItems} />
        </main>
      </div>
      <NavBar />
    </div>
  );
}
export default Search;
