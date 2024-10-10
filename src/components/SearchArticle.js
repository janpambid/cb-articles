import React, { useEffect, useState } from "react";
import { getArticles } from "../services/connection";
import ArticleList from "./Articles/ArticleList";
const SearchArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => setArticles(response.data))
      .catch(console.error);
  }, []);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);
    const filteredItems = articles.filter(
      (item) =>
        item.id.toString().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm)
    );
    setResults(filteredItems);
  };

  return (
    <div>
      <h2>Search Items</h2>
      <input
        type="text"
        placeholder="Search by id or title"
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 ? (
        <ArticleList filteredArticles={results} />
      ) : (
        <ArticleList filteredArticles={articles} />
      )}
    </div>
  );
};

export default SearchArticle;
