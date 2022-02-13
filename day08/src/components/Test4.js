import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setError(null);
        setLoading(true);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다. </div>;
  if (!data) return null;

  return (
    <div>
      {data && loading ? (
        <h2>로딩중...</h2>
      ) : (
        data.map((item) => (
          <p key={item.id}>
            [{item.id}] {item.title}
          </p>
        ))
      )}
      <p>{error ? error : null}</p>
    </div>
  );
}
