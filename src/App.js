import "./style.css";

import React from "react";
import { useState, useEffect } from "react";

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

  // 로더
  const [isLoading, setIsLoading] = useState(false);

  const [discussions, setDiscussions] = useState([]);
  // 초기 로딩시 fetch
  useEffect(() => {
    const getFetch = async () => {
      setIsLoading(true);
      await fetch("http://localhost:4000/discussions/")
        .then((response) => response.json())
        .then((data) => {
          const tempArr = [];
          for (let i = 0; i <= Math.ceil(data.length / 10) - 1; i++) {
            tempArr.push(data.slice(0 + i * 10, i * 10 + 10));
          }
          setDiscussions(tempArr);
          return data;
        })
        .then(setIsLoading(false));
    };
    getFetch();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      {isLoading ? (
        <div>...loading...</div>
      ) : (
        <Discussions page={page} discussions={discussions} />
      )}

      <PageNavigator
        page={page}
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
      />
    </div>
  );
}

export default App;
