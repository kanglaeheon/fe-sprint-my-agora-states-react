import React from "react";

const PageNavigator = () => {
  return (
    <div class="pagination__container">
      <div class="page__current--container">
        <p class="page__current"></p>
      </div>
      <div class="page__buttons">
        <button type="button" class="page__prev">
          이전
        </button>
        <button type="button" class="page__next">
          다음
        </button>
      </div>
    </div>
  );
};

export default PageNavigator;
