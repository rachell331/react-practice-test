import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const [ data, setData ] = useState([
        {id:1, name:'김다미'},
        {id:2, name:'최우식'},
        {id:3, name:'송혜교'},
        {id:4, name:'김도윤'},
        {id:5, name:'유재석'},
    ])

    const onDel1 = ()  => {
        setData( data.filter(item => item.id !== 1 ))
    }
    const onDel2 = () => {
        setData( data.filter( item => item.id !== 3 ))
    }

    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id ))
    }

    const onMod1 = () => {
        setData( data.map( item => {
            if( item.id === 2 ) {
                return {
                    ...item ,
                    name:'강호동'
                }
            }else{
                return item 
            }
        } ))
    }


    const onMod2 = ()  => {
        setData( data.map( item => item.id === 4 ? 
                                  {...item , name:'홍길동'} : item ))
    }

    const onMod  = ( id )  => {
        setData( data.map( item => item.id === id ? 
                                  {...item , name:'김혜수'} :  item ))
    }
    
    return (
        <div>            
            <Test1Sub onDel1={onDel1} onDel2={onDel2} onDel={onDel} onMod1={onMod1} onMod2={onMod2} onMod ={ onMod } />
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;