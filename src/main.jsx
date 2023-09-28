import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home/home.jsx';
import { NotFound } from "./pages/not-found/not-found.jsx";
import { ThreeUsers } from "./components/three-users/three-users.jsx";
import { UsersCountry } from './components/users-country/users-country.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/usuarios",
    element: <ThreeUsers />,
    errorElement: <NotFound />
  },
  {
    path: "/usuario/:idPais",
    element: <UsersCountry />,
    errorElement: <NotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
