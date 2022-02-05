import React from 'react';

const TodoItem = ({ item , onDel , onToggle  }) => {
    const { id , text , isChecked } = item 
    return (
        // isChecked 가 true 일때 on 클래스 붙이기 
        <li className={ isChecked ? 'on':'' }>
            <span onClick={ () => onToggle(id) }>&#10003;</span>
            <em> {text} </em>
            <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;