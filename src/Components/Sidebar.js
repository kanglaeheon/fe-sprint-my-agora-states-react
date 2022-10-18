import React from "react";

const Sidebar = () => {
  return (
    <section className="form__container">
      <h1>AGORA STATES</h1>
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="이름을 적어주세요"
              required
            />
          </div>
          <div className="form__input--title">
            <label for="name">Title</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="제목을 적어주세요"
              required
            />
          </div>
          <div className="form__textbox">
            <label for="story">Question</label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <button type="button" className="button__reset">
            reset
          </button>
          <input type="submit" value="submit" />
        </div>
      </form>
    </section>
  );
};

export default Sidebar;
