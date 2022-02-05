import React, {useState} from 'react'
import Test1Sub from './Test1Sub';

export default function Test1() {
    const [data, setData] =useState([
        {id: 1, name: '김다미'},
        {id: 2, name: '최우식'},
        {id: 3, name: '김성철'},
        {id: 4, name: '박진주'},
        {id: 5, name: '노정의'},
    ])

    const onDeleteName= (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const onModifyName = (id) => {
        setData(data.map(item => {
            if(item.id ===id){
                return {
                    ...item,
                    name: '이준혁'
                }
            } else {
                return item
            }
        }))
    }

    //다른 방법
    const onMod = (id) => {
        setData(data.map(item => item.id ===id? {...item, name: '이준혁'} : item))
    }

    return (
        <div>
            <Test1Sub onDeleteName={onDeleteName} onModifyName={onModifyName} onMod={onMod}/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                    {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    )
}
