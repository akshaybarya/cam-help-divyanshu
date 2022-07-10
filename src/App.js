import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/

import "./styles.css";
import Login from "./pages/Login";
import Pdf from "./pages/Pdf";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/pdf" element={<Pdf />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
