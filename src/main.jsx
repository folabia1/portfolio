import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { DesktopApp } from "./DesktopApp.jsx";
import { MobileApp } from "./MobileApp.jsx";

function isMobileDevice() {
  console.log("checking");
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>{isMobileDevice() ? <MobileApp /> : <DesktopApp />}</>
  </React.StrictMode>,
);
