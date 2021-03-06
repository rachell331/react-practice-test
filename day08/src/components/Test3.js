import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setData([]);
        setLoading(true);
        setError("π« λ°μ΄ν°λ₯Ό μ°Ύμ μ μμ΅λλ€");
      });
  }, []);

  return (
    <div>
      {data && loading ? (
        <h2>λ‘λ©μ€...</h2>
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
