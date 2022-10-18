import React from "react";
import Discussion from "./Discussion";
// 아고라 스테이츠 서버에서 Discussions fetch한다.
// App.js에서 관리중인 page state를 prop으로 받아와서 페이지에 따른 디스커션들을 렌더링
// 10개씩 렌더링

const Discussions = ({ page, discussions }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions[page] &&
          discussions[page].map((discussion) => {
            return (
              <Discussion
                key={discussion.id}
                page={page}
                discussion={discussion}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Discussions;
