import React from 'react';

const GalleryItem = ({ item , onView }) => {
    return (
        <li onClick={ () => onView(item.id) }>
            <img src={item.image} alt={item.title} />
        </li>
    );
};

export default GalleryItem;