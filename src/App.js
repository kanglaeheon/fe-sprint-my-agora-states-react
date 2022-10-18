import "./style.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import PageNavigator from "./Components/PageNavigator";
import Discussions from "./Components/Discussions";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Discussions />
      <PageNavigator />
    </div>
  );
}

export default App;
