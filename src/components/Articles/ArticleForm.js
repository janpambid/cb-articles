import React, { useState } from "react";
import { createArticle } from "../../services/connection";
const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newArt, setNewArt] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { title, body };
    try {
      const response = await createArticle(newArticle);
      setNewArt(response.data);
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };
  return (
    <div>
      <form className="card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Article Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
      {newArt != undefined ? (
        <div className="newItem">
          <b>Article {newArt.id}</b>
          <br></br>
          {newArt.title}
          <br></br>
          {newArt.body}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ArticleForm;
