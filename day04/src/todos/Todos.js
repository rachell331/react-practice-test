import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'


const datalist  = [
    {id:1, text:'운동하기'} ,
    {id:2, text:'수영하기'} ,
    {id:3, text:'독서하기'} ,
    {id:4, text:'친구만나기'} ,
    {id:5, text:'여행가기'} ,
]

const Todos = () => {
    const [ data , setData ] = useState( datalist )

    const onDel = ( id )  => {
      setData( data.filter( item => item.id !== id ))
    }

    return (
        <div className="Todos">
            <TodoForm />
            <TodoList data={data} onDel={onDel} />
        </div>
    );
};

export default Todos;