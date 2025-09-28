import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/admin/auth";
import Login from "../pages/admin/login";
import DashBoard from "../pages/admin/dashboard";
import DefaultLayout from "../layout/admin/default";
import Genres from "../pages/admin/genre/genreList";
import Register from "../pages/user/register";
import UserLogin from "../pages/user/login";
import HomePage from "../pages/user/home";


let routes = createBrowserRouter([
  {
    path: '/',
    Component: AuthLayout,
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
    Component: DefaultLayout,
    children: [
      {
        path: 'home',
        Component: HomePage
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


