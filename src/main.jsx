import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AccessPoint from "./pages/home/AccessPoint.jsx"
import Login from "./pages/welcomePage/Login.jsx"
import Register from "./pages/welcomePage/Register.jsx"
import Search from "./pages/search/Search.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Playlists from "./pages/profile/Playlists.jsx"
import Settings from "./pages/profile/Settings.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/accesspoint",
    element: <AccessPoint />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/playlists",
    element: <Playlists />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);