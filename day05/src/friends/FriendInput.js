import React, { useRef, useState } from 'react';

const FriendInput = ({ onAdd }) => {
    const nameRef = useRef()
    const [ form , setForm ] = useState( {
        name:'', age:'', image:'' 
    })
    //form.name, form.age, form.image 
    const { name, age, image } = form

    const changeInput = (e)  => {
        const { name , value } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    }
    const onSubmit=(e) => {
        e.preventDefault() 
        // if( name.length === 0 || age.length === 0 || image.length === 0 ) return 
        if( !name || !age || !image ) return         
        onAdd(form)
        setForm({
            name:'' , age:'' , image:''
        })
        nameRef.current.focus()
    }

    return (
        <form className="formadd" onSubmit={ onSubmit }>
            <p>
                <label> 이름 </label>
                <input type="text" name="name" value={ name } onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label> 나이 </label>
                <input type="text" name="age" value={age} onChange={changeInput} />
            </p>
            <p>
                <label> 사진 </label>
                <input type="text" name="image" value={image} onChange={changeInput} />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default FriendInput;