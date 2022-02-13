import React from "react";

export default function TestPost({ post, loading, currentPost }) {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul>
      {currentPost.map((item) => (
        <li
          key={item.id}
          style={{
            marginBottom: 5,
            listStyle: "none",
            borderBottom: "1px solid #dcdcdc",
            padding: 5,
          }}
        >
          {item.id}/{item.title}
        </li>
      ))}
    </ul>
  );
}
