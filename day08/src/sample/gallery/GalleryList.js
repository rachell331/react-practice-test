import React from "react";
import Masonry from "react-masonry-css";
import { ImageContainer } from "../styled/pixastyle";
import GalleryItem from "./GalleryItem";

const GalleryList = ({ photos }) => {
  return (
    <ImageContainer>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {photos.map((photo) => (
          <GalleryItem key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </ImageContainer>
  );
};

export default GalleryList;
