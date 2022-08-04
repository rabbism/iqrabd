import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";
import "./Components/WatchVideo.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App /> <ToastContainer />
  </>
);
