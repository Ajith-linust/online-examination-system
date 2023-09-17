import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./pages";
import { Provider } from "react-redux";
import { store } from "@reduxStore/store";
import Layout from "./layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
        <RoutePage />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
