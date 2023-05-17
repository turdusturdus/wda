import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<"id" | "title" | "body">("id");
  const itemsPerPage = 10;
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const changeSortField = (newSortField: "id" | "title" | "body") => {
    setSortField(newSortField);
  };

  const sortedPosts = [...posts].sort((a, b) =>
    a[sortField] > b[sortField] ? 1 : -1
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="sort-controls">
        Sort by: <button onClick={() => changeSortField("id")}>Id</button>
        <button onClick={() => changeSortField("title")}>Title</button>
        <button onClick={() => changeSortField("body")}>Body</button>
      </div>
      <Table
        data={sortedPosts.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )}
      />
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(posts.length / itemsPerPage) },
          (_, i) => (
            <button key={i} onClick={() => changePage(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Posts;
