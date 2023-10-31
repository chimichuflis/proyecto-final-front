import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.jsx";
import MusicMatch from "./pages/musicMatch/MusicMatch.jsx";
import "./index.css";
import WelcomePage from "./pages/welcomePage/WelcomePage.jsx";
import Login from "./pages/welcomePage/Login.jsx";
import Register from "./pages/welcomePage/Register.jsx";
import { Search } from "./pages/search/Search.jsx";
import RegisterConf from "./pages/welcomePage/RegisterConf.jsx";
import Recovery from "./pages/welcomePage/Recovery.jsx";
import ContextualMusic from "./pages/contextualMusic/ContextualMusic.jsx";
import Profile from "./pages/profile/Profile.jsx";
// import Playlists from "./pages/profile/Playlists.jsx";
import Settings from "./pages/profile/Settings.jsx";
import CreatePlaylist from "./pages/playlist/CreatePlaylist.jsx";
import CreateBy from "./pages/playlist/CreateBy.jsx";
import AddPlaylistSongs from "./pages/playlist/AddPlaylistSongs.jsx";
import PlaylistGenerated from "./pages/musicMatch/PlaylistGenerated.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/match",
    element: <MusicMatch />,
  },
  {
    path: "/playlistgenerated",
    element: <PlaylistGenerated />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/registerconfirm",
    element: <RegisterConf />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   path: "/playlists",
  //   element: <Playlists />,
  // },
  {
    path: "/createplaylist",
    element: <CreatePlaylist />,
  },
  {
    path: "/createplaylist/createby",
    element: <CreateBy />,
  },
  {
    path: "/addsongs",
    element: <AddPlaylistSongs />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/contextualmusic",
    element: <ContextualMusic />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
