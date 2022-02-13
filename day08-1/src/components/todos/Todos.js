import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'


const Todos = () => {
    const no = useRef(1)
    const [ data , setData ] = useState([
        // {id:1, text:'운동하기', isActive:false },
        // {id:2, text:'수영하기', isActive:false },
    ])

    //삭제
    const onDel = (id) => {
        setData( data.filter( todo => todo.id !== id ))
    }

    // 추가 
    const onAdd = ( text )  => {
      setData([
          ...data ,
          {
              id: no.current++ ,
              text ,
              isActive: false 
          }
      ])
    }

    // 갱신 
    const onToggle = ( id )  => {
      setData( data.map( todo => todo.id === id ? { ...todo , isActive: !todo.isActive } : todo ))
    }


    return (
        <div className="Todos">
            <h1>TodoList</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;