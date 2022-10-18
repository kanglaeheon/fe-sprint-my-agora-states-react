import "./style.css";

import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import PageNavigator from "./Components/PageNavigator";
import Discussions from "./Components/Discussions";

function App() {
  // 페이지 상태관리
  const [page, setPage] = useState(1);
  // setPage 함수
  const handlePrevPage = () => {
    if (page === 1) {
      return alert("가장 앞 페이지입니다.");
    }
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <Sidebar page={page} />
      <Discussions page={page} />
      <PageNavigator
        page={page}
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
      />
    </div>
  );
}

export default App;
