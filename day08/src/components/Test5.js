import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Test5() {
  const [searchLists, setSearchLists] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const url = `https://hn.algolia.com/api/v1/search?query=${text}`;
    axios.get(url).then((res) => setSearchLists(res.data.hits));
  }, [text]);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <hr />
      <ul>
        {searchLists.map((list) => (
          <li key={list.objectID}>{list.title}</li>
        ))}
      </ul>
    </div>
  );
}
