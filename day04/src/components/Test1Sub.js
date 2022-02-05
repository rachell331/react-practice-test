import React from 'react';

const Test1Sub = ({onDel1, onDel2 , onDel, onMod1 , onMod2 , onMod  }) => {
    return (
        <div>
            <h2>삭제</h2>
            <p>
                <button onClick={ onDel1 }>김다미</button>
                <button onClick={ onDel2 }>송혜교</button>
                <button onClick = { () => onDel(5) }>유재석</button>
                <button onClick = { () => onDel(2) }>최우식</button>
            </p>
            <h2>수정</h2>
            <p>
                <button onClick={ onMod1 }>최우식</button>
                <button onClick={ onMod2 }>김도윤</button>
                <button onClick={ () => onMod(1) }>김다미</button>
            </p>
        </div>
    );
};

export default Test1Sub;