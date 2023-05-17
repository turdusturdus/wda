import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface TableProps {
  data: Post[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Link to={`/posts/${post.id}`}>View Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
