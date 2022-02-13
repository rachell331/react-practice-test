import React, { useState } from "react";
import { ImageForm } from "../styled/pixastyle";

const GallerySearch = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
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
