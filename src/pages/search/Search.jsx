import React, { useEffect, useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import "../../styles/search.css";
import NavBar from "../../components/home/NavBar";
import SearchResult from "../../components/search/SearchResult";
import { songs } from "../../API/Rule_Songs";
import { searchApi } from "../../API/Rule_Search";
import TopTwenty from "../../components/search/TopTwenty";
import { playlists } from "../../API/Rule_playlist";

export const Search = () => {
  // const [move, setMove] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [foundItems, setFoundItems] = useState({
    songs: [],
    artists: [],
    albums: [],
  });
  const [changeWiew, setChangeView] = useState(true);
  const [changeIcon, setChangeIcon] = useState(true);
  const [ownPlaylists, setOwnPlaylists] = useState([]);

  useEffect(() => {
    const getPLaylists = async () => {
      try {
        const response = await playlists(searchTerm);
        console.log(response);
        setOwnPlaylists(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPLaylists();
  }, []);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const response = await searchApi("");
        setFoundItems(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, []);

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

  // const handdleClick = () => {
  //   setMove(true);
  // };
  const handleBack = () => {
    setChangeIcon(true);
    setChangeView(true);
  };

  const handleClick = () => {
    setChangeView(false);
    setChangeIcon(false);
  };
  const handleSort = (foundItems) => {
    setItems(foundItems);
  };

  return (
    <div className="wrapper-search gradient-top">
      <div className="search-container">
        <header className="header-search">
          {changeWiew ? <h1>Buscador</h1> : null}
          <div className={changeWiew ? null : "padding-top-search"}>
            <SearchBar
              handdleClick={handleClick}
              setSearchTerm={setSearchTerm}
              resetSearch={setFoundItems}
              changeIcon={changeIcon}
              handleBack={handleBack}
              items={items}
            />
          </div>
        </header>
        <main className="main-search">
          {changeWiew ? (
            <TopTwenty songItems={foundItems["songs"]} />
          ) : (
            <SearchResult foundItems={foundItems} ownPlaylists={ownPlaylists} />
          )}
        </main>
      </div>
      <NavBar />
    </div>
  );
};
