import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Get from './components/user-crud-api/get';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Get></Get>,
    loader: () => fetch("http://127.0.0.1:8000/api/get-user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
