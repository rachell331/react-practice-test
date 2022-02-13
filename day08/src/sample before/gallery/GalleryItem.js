import React from "react";
import styled from "styled-components";

const ImageBox = styled.article`
  margin-bottom: 30px;
  border: 1px solid #999;
  padding: 15px 15px 35px;
  box-shadow: 3px 3px 5px #dcdcdc;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h3 {
    font-size: 30px;
    color: tomato;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  ul {
    padding: 0 15px;
    margin-bottom: 20px li {
      margin-bottom: 5px;
    }
  }
  p {
    span {
      border-radius: 15px;
      padding: 3px 20px;
      display: inline-block;
      background-color: #efefef;
      margin-right: 5px;
      color: tomato;
    }
  }
`;

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
