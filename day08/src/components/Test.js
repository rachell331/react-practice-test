import React, { useState, useEffect } from "react";
import axios from "";
import TestPost from "./TestPost";
import TestPaging from "./TestPaging";

export default function Test() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postingPage] = useState(10);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  });

  const lastPost = currentPage * postingPage; //10,20,..,100
  const firstPost = lastPost - postingPage; //0,10,...,90
  const currentPost = post.slice(firstPost, lastPost); //(0,10),(10,20),...

  const onShow = (id) => {
    setCurrentPage(id);
  };

  return (
    <div>
      <TestPost post={post} loading={loading} currentPost={currentPost} />
      <TestPaging post={post} postPaging={postingPage} onShow={onShow} />
    </div>
  );
}
