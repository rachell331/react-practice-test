import React from "react";

export default function TestPaging({ post, postPaging, onShow }) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(post.length / postPaging); i++) {
    pageNum.push(i);
  }
  return (
    <>
      <ul style={{ listStyle: "none", display: "flex" }}>
        {pageNum.map((number) => (
          <li
            key={number}
            style={{
              width: 30,
              height: 30,
              border: "1px slid #999",
              margin: 5,
              lineHeight: "30px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => onShow(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </>
  );
}
