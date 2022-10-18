import React from "react";

const PageNavigator = ({ page, prevPage, nextPage }) => {
  return (
    <div className="pagination__container">
      <div className="page__current--container">
        <p className="page__current">{page}</p>
      </div>
      <div className="page__buttons">
        <button type="button" className="page__prev" onClick={prevPage}>
          이전
        </button>
        <button type="button" className="page__next" onClick={nextPage}>
          다음
        </button>
      </div>
    </div>
  );
};

export default PageNavigator;
