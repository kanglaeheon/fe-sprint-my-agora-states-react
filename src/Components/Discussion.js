import React from "react";

const Discussion = ({ item }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={item.avatarUrl}
          alt={`avatar of ${item.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={item.url}>{item.title}</a>
        </h2>
        <div className="discussion__information">
          {`${item.author} / ${new Date(item.createdAt).toLocaleString()}`}
        </div>
        <div className="discussion__answered">
          {item.answer !== null ? "✅" : "❌"}
        </div>
      </div>
    </li>
  );
};
export default Discussion;
