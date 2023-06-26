import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import modules from "./Modules";
import Navbar from "./Modules/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div className="App">
        <Routes>
          {modules.map((module) => (
            <Route
              path={module.routeProps.path}
              element={module.routeProps.component()}
            ></Route>
          ))}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
