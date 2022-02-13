import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyle from "../styled/Global";
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";
import { Container } from "../styled/pixastyle";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [text, setText] = useState("flowers");

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=개인키&q=${text}&image_type=photo&pretty=true`;

    axios
      .get(url)
      .then((res) => {
        setPhotos(res.data.hits);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setPhotos([]);
        setIsLoading(true);
        setError("❌we find error.❌");
      });
  }, [text]);

  const onSearch = (text) => {
    setText(text);
  };

  return (
    <>
      <GlobalStyle /> {/*초기화파일 */}
      <Container>
        <GallerySearch onSearch={onSearch} />
        {isLoading && photos.length === 0 && <h1>No Images Found</h1>}
        {/*로딩시 */}

        {photos && !isLoading && <GalleryList photos={photos} />}

        <p>{error ? error : null}</p>
      </Container>
    </>
  );
}
