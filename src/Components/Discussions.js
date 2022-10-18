import React from "react";
import { useState, useEffect, useRef } from "react";
import Discussion from "./Discussion";
// 아고라 스테이츠 서버에서 Discussions fetch한다.
// App.js에서 관리중인 page state를 prop으로 받아와서 페이지에 따른 디스커션들을 렌더링
// 10개씩 렌더링

const Discussions = ({ page }) => {
  console.log(page);
  const [discussionsData, setDiscussionsData] = useState([]);
  const [pagedDiscussions, setPagedDiscussions] = useState([]);
  // 아고라 데이터 fetch
  const fetchAgoraData = async (page) => {
    const tempArr = [];
    await fetch("http://192.168.35.190:4000/discussions/")
      .then((response) => response.json())
      .then((response) => {
        setDiscussionsData(response);
        return response;
      })
      .then((response) => {
        for (let i = 0; i <= Math.ceil(response.length / 10) - 1; i++) {
          tempArr.push(response.slice(0 + i * 10, i * 10 + 10));
        }
        setPagedDiscussions(tempArr);
      });
  };
  // 초기 로딩시 fetch
  useEffect(() => {
    fetchAgoraData();
  }, []);

  // 페이지 변경시 리렌더링
  //     useEffect(() => {}, [page]);
  //   };

  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {pagedDiscussions[page].map((item) => {
          return <Discussion key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Discussions;
