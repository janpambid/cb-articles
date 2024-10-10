import React, { useState } from "react";
import { updateArticle } from "../../services/connection";
import { useParams } from "react-router-dom";
const ArticleUpdateForm = () => {
  const { articleId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [updatedArt, setUpdatedArt] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedArticle = { title, body };
    try {
      const response = await updateArticle(articleId, updatedArticle);
      setUpdatedArt(response.data);
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };
  return (
    <div>
      <form className="card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Update Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Update Article</button>
      </form>
      {updatedArt !== undefined ? (
        <div className="newItem">
          <b>Article {updatedArt.id}</b>
          <br></br>
          {updatedArt.title}
          <br></br>
          {updatedArt.body}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ArticleUpdateForm;
