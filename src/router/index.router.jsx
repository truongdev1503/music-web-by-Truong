import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/admin/auth";
import Login from "../pages/admin/login";
import DashBoard from "../pages/admin/dashboard";
import DefaultLayout from "../layout/admin/default";
import Genres from "../pages/admin/genre/genreList";
import Register from "../pages/user/register";
import UserLogin from "../pages/user/login";
import HomePage from "../pages/user/home";
import AuthLayoutUser from "../layout/user/auth";
import DefaultLayoutUser from "../layout/user/default";
import ArtistLayout from "../layout/user/artistLayout";
import Album from "../pages/user/studio/album";
import Song from "../pages/user/studio/song";
import Playlists from "../pages/user/playlist";
import LikedSongs from "../pages/user/likedSongs";
import TopHit from "../pages/user/topHit";
import Playlist from "../pages/user/playlist";


let routes = createBrowserRouter([
  {
    path: '/',
    Component: AuthLayoutUser,
    children: [
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: UserLogin
      },
    ]
  },
  {
    path: '/',
    Component: DefaultLayoutUser,
    children: [
      {
        path: 'home',
        Component: HomePage,
      }, 
      {
        path: "play-list",
        Component: Playlist
      },
      {
        path: "liked-songs",
        Component: LikedSongs
      },
      {
        path: "top-hits",
        Component: TopHit
      }
    ]
  },
   {
    path: '/studio',
    Component: ArtistLayout,
    children: [
      {
        path: 'album',
        Component: Album
      }, 
      {
        path: 'song',
        Component: Song
      }, 
    ]
  },
  {
    path: '/admin', 
    Component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        Component: DashBoard
      },
      {
        path: 'genre',
        Component: Genres
      },
    ],
  },
  {
    path: '/admin',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
    ],
  },
]);

export default routes


