import React from 'react';

const Test3 = () => {
    const txt  ='오늘은 일요일 입니다.'
    //{속성:값} 'background-color' - backgroundColor
    // font-size : fontSize , text-indent : textIndent
    const style1 = {
        backgroundColor:'pink' , padding:15, margin:'10px'
    }
    const style2 = {
        backgroundColor:'yellow',
        padding:'20px 10px', margin:30, textIndent: 20, 
        fontSize:40 
    }

    return (
        <>
            <h2>JSX영역 스타일 작성법</h2>
            <p style={style1}> {txt} </p>
            <p style={ style2 }> {txt} </p>
            <p style={{backgroundColor:'tomato', padding:10}}> {txt} </p>
            <p> {txt} </p>
        </>
    );
};

export default Test3;