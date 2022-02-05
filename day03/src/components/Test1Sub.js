import React from 'react'

export default function Test1Sub({onDeleteName, onModifyName, onMod}) {
    return (
        <div>
            <h2>삭제</h2>
            <p>
                <button onClick={()=> onDeleteName(1)}>김다미</button>
                <button onClick={()=> onDeleteName(2)}>최우식</button>
                <button onClick={()=> onDeleteName(3)}>김성철</button>
            </p>
            <h2>수정</h2>
            <p>
                <button onClick={()=> {onModifyName(4)}}>박진주</button>
                <button onClick={()=> {onModifyName(5)}}>노정의</button>
                <button onClick={()=>{ onMod(1)}}>김다미</button>
            </p>
            
        </div>
    )
}
