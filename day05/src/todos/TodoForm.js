import React, { useRef, useState } from 'react';
import './TodoForm.css'
const TodoForm = ({ onAdd }) => {
    const [ text , setText ] = useState('')
    const textRef = useRef()
    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }
    const onInsert = (e)  => {
        e.preventDefault()
        if( !text ) return 
        onAdd( text )
        setText('')
        textRef.current.focus()
    }
    return (
        <form className="TodoForm" onSubmit={ onInsert }>
            <input type="text" placeholder="할일을 입력하세요" value={text} onChange={changeInput} ref={textRef} />
            <button  type="submit">추가</button>
        </form>
    );
};

export default TodoForm;