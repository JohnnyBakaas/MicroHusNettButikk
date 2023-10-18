import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./routes/Blog.tsx";
import Home from "./routes/Home.tsx";
import Reisverk from "./routes/Reisverk.tsx";
import Store from "./routes/Store.tsx";
import StoreArticle from "./components/storeArticle/StoreArticle.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "reisverk",
        element: <Reisverk />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "test",
        element: <StoreArticle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
