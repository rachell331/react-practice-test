import React, { useState, useMemo } from "react";

export default function Test8() {
  const [count, setCount] = useState(1);

  const myFunc = (cnt) => {
    let k = 0;
    for (let i = 0; i < 100000; i++) {
      k++;
    }
    return cnt * 10;
  };

  //사용자정의함수
  const reCount = useMemo(() => {
    return myFunc(count);
  }, [count]);

  return (
    <div>
      <h3>카운트 : {count}</h3>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <hr />
      <h3>출력 : {reCount} </h3>
    </div>
  );
}
