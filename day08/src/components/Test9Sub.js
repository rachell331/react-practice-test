import React, { useState, useMemo } from "react";

const getColor = (color) => {
  console.log("getColor");
  switch (color) {
    case "pink":
      return "분홍색 입니다.💕";
    case "tomato":
      return "다홍색 입니다.❤️‍🔥";
    case "orange":
      return "주황색 입니다.🧡";
    case "skyblue":
      return "하늘색 입니다.💙";
    default:
      return "해당 내용이 없습니다.";
  }
};

const getFood = (food) => {
  console.log("getFood"); //필요이상으로 일이 많아지는 것을 줄이기 위해서 확인하는 용도
  switch (food) {
    case "갈비":
      return "갈비가 조하~!🍖";
    case "불고기":
      return "불고기가 진리지 무슨소리여?🥩";
    case "삼겹살":
      return "삽결살이 최고야!!🥓";
    default:
      return "해당 내용이 없습니다.";
  }
};
//바뀌는 것만 실행하고, 바뀌지 않는 것은 변화시키지 않도록 하기 위함 => useMemo를 사용
export default function Test9Sub({ color, food }) {
  //   const colorInfo = getColor(color);
  //   const foodInfo = getFood(food);

  const colorInfo = useMemo(() => getColor(color), [color]);

  const foodInfo = useMemo(() => getFood(food), [food]);

  return (
    <div>
      <h4>좋아하는 색 : {color}</h4>
      <h5>설명 : {colorInfo}</h5>
      <hr />
      <h4>좋아하는 음식 : {food}</h4>
      <h5>음식 설명 : {foodInfo}</h5>
    </div>
  );
}
