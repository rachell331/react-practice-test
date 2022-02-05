import React, { useState } from 'react';

const Test2 = () => {
    const [ data , setData ] = useState([])
    //{ id:1 , text :'홍길동'}
    const onAdd1 = () => {
        setData( data.concat(
            {
                id:data.length ,
                text : '홍길동' + Math.floor( Math.random() * 10 )
            }
        ))
   }
   const onAdd  = ()  => {
       setData([
           ...data ,
           {
               id : data.length ,
               text : '김철수' + Math.floor( Math.random() * 10 )
           }
       ])
   }

    return (
        <div>
            <h2>데이터 추가</h2>
            <button onClick={ onAdd }> 추가 </button>
            <hr />
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        { item.id } / { item.text }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;