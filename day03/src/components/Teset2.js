import React, {useState} from 'react'

export default function Teset2() {
    const [data, setData] = useState([])
    {id: 1, text: '홍길동'}
    const onAdd = () => {
        setData(data.concat({
            id:data.length,
            text: '홍길동' + Math.floor(Math.random()*10)
        }))
    }
    //다른 방법
    const onAdd = () => {
        setData([
            ...data,
            {
                id: data.length,
                text: '홍길동' + Math.florr(Math.random * 10)
            }
        ])
    }
    return (
        <div>
            <h2>데이터 추가 </h2>
            <button onClick={onAdd}>추가</button>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    )
}
