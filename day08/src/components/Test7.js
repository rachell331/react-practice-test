import React, { useState, useMemo } from "react";

export default function Test7() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(10);

  //사용자 정의 함수 - 값을 기억할 수 있게끔 훅을 제공하는데, 전체 내부함수는 전체가 동시에 실행이 된다.
  //   const isEven = () => {
  //     console.log(count1);
  //     return count1 % 2 === 0;
  //   };

  const isEven = useMemo(() => {
    console.log(count1);
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <h2>카운트 : {count1}</h2>
      <button onClick={() => setCount1(count1 + 1)}>증가</button>

      <h2>카운트 : {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>감소</button>
      <hr />
      <h2>
        {/* 함수() 이렇게 쓰면 바로 호출된다. */}
        홀수, 짝수 출력 : {isEven ? "짝수" : "홀수"}
      </h2>
    </div>
  );
}

/**
 [성능최적화]
 useMemo | useCallback : 메모이제이션된 값을 반환한다.
 - useMemo : 리턴값을 기억하고 재사용하는 것 -> 사용하기 쉽지 않다. 
 (많이 써본 사람들이 유용하게 쓸 수 있다.) 사용자 정의함수를 사용함 (잘쓰기 쉽지 않음) => context에서 사용
 - useCallback : 함수 자체를 기억하고 재사용하는 것

 [return 값을 기억]
 useMemo(()=>{}, deps)
 useMemo(콜백함수, 의존성)
 useMemo(콜백함수, [])
 useMemo(콜백함수, [바뀌는 값])
 
 [함수 자체를 기억]
 useCallback(()=>{}, deps)
 useCallback(콜백함수, 의존성)
 useCallback(콜백함수, [])
 useCallback(콜백함수, [바뀌는 값])

 */
