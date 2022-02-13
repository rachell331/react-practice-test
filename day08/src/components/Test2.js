import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test14() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(2);
  const [num, setNum] = useState(2);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${num}`
      );
      setPost(res.data);
    };
    getData();
  }, [num]);

  const onShow = () => {
    setNum(id);
  };
  //확인을 눌렀을 때 결과가 나오게하기
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={onShow}>확인</button>
      <p>
        <b>{post.id}</b> : {post.title}
      </p>
    </div>
  );
}
