import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/search.css";
import NavBar from "../../components/home/NavBar";
import Songs from "../../components/search/Songs";

function Search() {
  const [move, setMove] = useState(false);
  const handdleClick = () => {
    setMove(true);
  };
  return (
    <div className="wrapper-search gradient-top">
      <div className="search-container">
        <header className="header-search">
          {move ? null : <h1>Buscador</h1>}
          <SearchBar OnClick={handdleClick} />
        </header>
        <main>
          <div className="subtitle-search">
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
          <div className="recents-container"></div>
        </main>
      </div>
      <NavBar />
    </div>
  );
}
export default Search;
