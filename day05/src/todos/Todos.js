import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'


const datalist  = [
    {id:1, text:'운동하기',  isChecked : false} ,
    {id:2, text:'수영하기' , isChecked : true } ,
]

const Todos = () => {
    const no = useRef( datalist.length + 1 )
    const [ data , setData ] = useState( datalist )

    const onDel = ( id )  => {
      setData( data.filter( item => item.id !== id ))
    }

    //추가
    const onAdd = ( text )  => {
        setData([
            ...data , 
            {
                id: no.current++ ,
                text:text ,
                isChecked : false
            }
        ])
    }


    //토글
    const onToggle = ( id )  => {
        setData( data.map( item => item.id === id ?
                        {...item , isChecked:!item.isChecked } : item ))
    }

    return (
        <div className="Todos">
            <TodoForm  onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;