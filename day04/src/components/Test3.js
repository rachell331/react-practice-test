import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1) 
    // 고유번호 처리 
    const [ data , setData ] = useState([])
    const names = '전지현,김다미,강호동,유재석,고길동,송소희,이승기,이효리,김나은,엄정화,화사,하하,송혜교'.split(',')
    // mdn 사이트에서 String객체 -> 문자열을 배열로 

    const onAdd  = ()  => {
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data , 
            {
                id: no.current ++  , 
                text : names[ ran ]
            }
        ])
    }

    return (
        <div>
            <button onClick={ onAdd }> 추가 </button>        
            <hr />
            {
                data.map( item => <p key={item.id}>
                    { item.id } / { item.text }
                </p>)
            }
        </div>
    );
};

export default Test3;