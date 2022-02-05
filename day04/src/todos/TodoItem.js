import React from 'react';

const TodoItem = ({ item , onDel }) => {
    const { id , text } = item 
    return (
        <li>
            <span>&#10003;</span>
            <em> {text} </em>
            <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;