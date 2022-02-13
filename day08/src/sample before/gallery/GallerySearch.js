import React, { useState } from "react";
import styled from "styled-components";

const ImageForm = styled.form`
  text-align: center;
  padding: 40px 0;
  input {
    width: 450px;
    height: 50px;
    padding: 0 15px;
    border: 1px solid #999;
    box-sizing: border-box;
  }
  button {
    width: 80px;
    height: 50px;
    vertical-align: top;
    border: none;
    margin-left: 5px;
    background-color: #333;
    color: #fff;
  }
`;

const GallerySearch = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return onSearch(searchInput);
    console.log(searchInput);
  };

  return (
    <ImageForm onSubmit={onSubmit}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">검색</button>
    </ImageForm>
  );
};

export default GallerySearch;
