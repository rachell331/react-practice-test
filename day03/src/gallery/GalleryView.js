import React from 'react';
import GalleryBig from './GalleryBig';
import GalleyList from './GalleyList';

const GalleryView = ( { data , cat , onView}) => {
    return (
        <div className='bigview'>
            <GalleryBig cat={cat} />
            <GalleyList data={data} onView={onView} />
        </div>
    );
};

export default GalleryView;