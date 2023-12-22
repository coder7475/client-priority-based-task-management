import { createBrowserRouter } from 'react-router-dom';
import Error from './../pages/Error';
import Home from './../pages/Home';
import RootLayout from './../layouts/RootLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import DashHome from '../pages/DashHome';
import AddTask from '../pages/AddTask';

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
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    errorElement: <Error/>,
    children: [
      {
        path: "/dashboard",
        element: <DashHome/>
      },
      {
        path: "addTask",
        element: <AddTask/>
      },
      {
        path: "editTask",
        element: <h4>Edit Task</h4>
      },
      {
        path: "deleteTask",
        element: <h3>Delete Task</h3>
      }
    ]
  }
])