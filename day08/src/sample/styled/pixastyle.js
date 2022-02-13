// 스타일 분리 작업 해보기
import styled from "styled-components";

//Gallery.js
export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

//GallerySearch.js
export const ImageForm = styled.form`
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

//GalleryList.js
export const ImageContainer = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

//GalleryItem.js
export const ImageBox = styled.article`
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
