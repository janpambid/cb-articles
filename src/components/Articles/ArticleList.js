import React from "react";
import { useNavigate } from "react-router-dom";
const ArticleList = ({ filteredArticles }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Articles</h2>
      <div className="container">
        <div className="item">
          <button onClick={navigate("/create")}>Create Article</button>
        </div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              className="item"
              onClick={navigate("/update/" + article.id)}
              key={article.id}
            >
              <b>Article {article.id}</b>
              <br></br>
              {article.title}
            </div>
          ))
        ) : (
          <div className="item">
            <b>No results found</b>
          </div>
        )}
      </div>
    </div>
  );
};
export default ArticleList;
