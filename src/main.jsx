import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Get from './components/user-crud-api/get';
import Post from './components/user-crud-api/post';
import View from './components/user-crud-api/view';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Get></Get>,
    loader: () => fetch(`http://127.0.0.1:9000/api/get-user`),
  },
  {
    path: "/post-user",
    element: <Post></Post>,
    loader: () => fetch(`http://127.0.0.1:9000/api/post-user`),
  },
  {
    path: "/view-user/:id",
    element: <View></View>,
    loader: ({ params }) => fetch(`http://127.0.0.1:9000/api/find-user/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
