import React, { useRef, useState } from 'react';
import './style.css'
import datalist from '../assets/api/data'
import FriendList from './FriendList';
import FriendInput from './FriendInput';

const Friend = () => {
    // const no = useRef( datalist.length + 1 )
    const no = useRef( 6 )
    const [ friends , setFriends ] = useState( datalist )
    const [ isView , setIsView ] = useState( false )

    const onDel = ()  => {
        setFriends([])
    }
    const onRestore = ()  => {
        setFriends(datalist)
    }

    //추가
    const onAdd = ( form ) => {
        form.id = no.current++
        setFriends([
            ...friends, form 
        ])
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원: { datalist.length } </h1>
            <p className="chk">
                <input type="checkbox"  checked={isView} 
                    onChange = { e => setIsView( e.target.checked ) }
                />
                활성 / 비활성 
            </p>

            <FriendList  friends={friends} />

            <p className="btn">
                <button onClick={ onDel }>모두 삭제</button>
                <button onClick={ onRestore }>초기 복구</button>
            </p>

            {
                isView && <FriendInput onAdd={onAdd} />
            }
            
        </div>
    );
};

export default Friend;