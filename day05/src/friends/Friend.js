import React, { useRef, useState } from 'react';
import FriendList from './FriendList';
import './style.css'
import FriendInput from './FriendInput';
import dataList from '../assets/api/frienddata'

const Friend = () => {
    const [ data , setData ] = useState( dataList )
    const [ isView , setIsView ] = useState( false )
    const no = useRef( dataList.length + 1 )

    const onRemove = ()  => {
        setData([])
    }
    const onRestore = ()  => {
        setData( dataList )
    }
    //삭제
    const onDel = (id)  => {
        setData( data.filter( item => item.id !== id ))
    }
    //추가
    const onAdd  = ( form )  => {
        form.id = no.current++
        setData([...data , form ])
    }
    
    return (
        <div className="wrap">
            <h1>친구들 총인원 : {data.length} </h1>
            <p className="chk">
                <input type="checkbox" checked={ isView } 
                       onChange={ e => setIsView( e.target.checked)} 
                />
                {
                    isView ? '추가 비활성' : '추가 활성'
                }
            </p>

            <FriendList data={data} onDel={onDel} />

            <p className="btn">
                <button onClick={ onRemove }>모두삭제</button>
                <button onClick={ onRestore }>초기복구</button>
            </p>
            {
                isView && <FriendInput  onAdd={onAdd} />
                // isView ? <FriendInput /> : null
            }
            
        </div>
    );
};

export default Friend;