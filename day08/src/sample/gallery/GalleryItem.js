import React from "react";
import { ImageBox } from "../styled/pixastyle";

const GalleryItem = ({ photo }) => {
  const { webformatURL, user, views, downloads, likes, tags } = photo;
  const tagLists = tags.split(",");

  return (
    <ImageBox>
      <img src={webformatURL} alt={photo.title} />
      <h3>{user}</h3>
      <ul>
        <li>조회수 : {views.toLocaleString()}</li>
        <li>다운로드 : {downloads.toLocaleString()}</li>
        <li>좋아요 : {likes.toLocaleString()}</li>
      </ul>
      <p>
        {tagLists.map((list, index) => (
          <span key={index}>#{list}</span>
        ))}
      </p>
    </ImageBox>
  );
};

export default GalleryItem;
