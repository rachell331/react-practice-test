import React, { useState, useMemo } from "react";
import Test9Sub from "./Test9Sub";

export default function Test9() {
  const [color, setColor] = useState();
  const [food, setFood] = useState();

  const onColor = (e) => {
    setColor(e.target.value);
  };
  const onFood = (e) => {
    setFood(e.target.value);
  };

  return (
    <div>
      <h2>당신이 좋아하는 색은?</h2>
      <div>
        <input type="text" onChange={onColor} />
        <p>pink, tomato, orange, skyblue</p>
      </div>
      <h2>당신이 좋아하는 음식은?</h2>
      <div>
        <p>
          <input type="radio" value="갈비" name="food" onChange={onFood} />
          <label>갈비</label>
        </p>
        <p>
          <input type="radio" value="불고기" name="food" onChange={onFood} />
          <label>불고기</label>
        </p>
        <p>
          <input type="radio" value="삼겹살" name="food" onChange={onFood} />
          <label>삼겹살</label>
        </p>
      </div>
      <Test9Sub color={color} food={food} />
    </div>
  );
}
