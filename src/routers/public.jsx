import { createBrowserRouter } from 'react-router-dom';
import Error from './../pages/Error';
import Home from './../pages/Home';
import RootLayout from './../layouts/RootLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ]
  }
])