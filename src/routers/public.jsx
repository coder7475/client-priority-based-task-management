import { createBrowserRouter } from 'react-router-dom';
import Error from './../pages/Error';
import Home from './../pages/Home';
import RootLayout from './../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  }
])