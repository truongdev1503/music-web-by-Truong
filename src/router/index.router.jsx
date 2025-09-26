import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/admin/auth";
import Login from "../pages/admin/login";
import DashBoard from "../pages/admin/dashboard";
import DefaultLayout from "../layout/admin/default";

let routes = createBrowserRouter([
  {
    path: '/',
    Component: AuthLayout,
    // children: [
    //   {
    //     path: 'login',
    //     Component: Login
    //   },
    // ]
  },
  {
    path: '/admin', 
    Component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        Component: DashBoard
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


