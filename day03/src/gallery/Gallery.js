import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import './style.css'

const imgList = [
    {id:1, title:'고양이1', image:'./images/cat0.jpg' , desc:'고양이1 이미지의 세부설명입니다.'},
    {id:2, title:'고양이2', image:'./images/cat1.jpg' , desc:'고양이2 이미지의 세부설명입니다.'},
    {id:3, title:'고양이3', image:'./images/cat2.jpg' , desc:'고양이3 이미지의 세부설명입니다.'},
    {id:4, title:'고양이4', image:'./images/cat3.jpg' , desc:'고양이4 이미지의 세부설명입니다.'},
    {id:5, title:'고양이5', image:'./images/cat4.jpg' , desc:'고양이5 이미지의 세부설명입니다.'},
    {id:6, title:'고양이6', image:'./images/cat5.jpg' , desc:'고양이6 이미지의 세부설명입니다.'},
    {id:7, title:'고양이7', image:'./images/cat6.jpg' , desc:'고양이7 이미지의 세부설명입니다.'},
]

const Gallery = () => {
    const [ data , setData ] = useState( imgList )
    const [ cat , setCat ] = useState( data[0] )

    const onView = ( id )  => {
        // setCat( data[id-1] )
        setCat( data.find( item => item.id === id ))
    }

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;