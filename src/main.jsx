import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { DesktopApp } from "./desktop/app/DesktopApp.jsx";
import { MobileApp } from "./mobile/app/MobileApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: isMobileDevice() ? <MobileApp /> : <DesktopApp />,
  },
]);

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
}

ReactDOM.createRoot(document.getElementById("app-root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
