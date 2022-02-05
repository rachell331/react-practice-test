import React, { useRef, useState } from 'react';
import './TodoForm.css'
const TodoForm = () => {
    const [ text , setText ] = useState('')
    const textRef = useRef()
    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }

    return (
        <div className="TodoForm">
            <input type="text" placeholder="할일을 입력하세요" value={text} onChange={changeInput} ref={textRef} />
            <button>추가</button>
        </div>
    );
};

export default TodoForm;