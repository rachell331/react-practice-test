import React, { useRef, useState } from 'react';

const Test4 = () => {
    const no = useRef(1)
    const idRef = useRef()

    const [ data , setData ] = useState([])
    const [ form , setForm ] = useState({
        userid :'' , userpw :'' 
    })
    const { userid , userpw } = form 

    const changeInput = (e) => {
        const { value , name } = e.target 
        setForm( {
            ...form , 
            [name] : value 
        })
    }

    const onAdd  = (e)  => {
        e.preventDefault()

        // if( userid.length === 0 || userpw.length === 0) return 
        if( !userid || !userpw ) return         

        setData([
            ...data , 
            {
                id: no.current++ ,
                userid ,
                userpw 
            }
        ])
        setForm({
            userid:'',
            userpw:''
        })
        idRef.current.focus() 
    }

    return (
        <div>

           <form onSubmit={ onAdd }>
                <input type="text" onChange={changeInput} value={userid} name="userid" ref={ idRef } />
                <input type="text" onChange={changeInput} value={userpw} name="userpw" />
                <button type="submit">추가</button>
            </form> 

            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.userid } / { item.userpw }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;