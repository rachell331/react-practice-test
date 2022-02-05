import React from 'react';

const Test5 = () => {
    //삼항, &&연산자, ||연산자
    const done1 = true 
    const done2 = false 
    const done3 = undefined

    return (
        <div>
            <p>
                { done1 === true ? '로그인':'로그아웃' }
            </p>        
            <p>
                { done1 ? '로그인':'로그아웃'}
            </p>
            <p>
                { done1 && '참'}
            </p>
            <p>
                { done2 || '거짓'}
            </p>
            <p>
                { done3 || '값이 존재하지 않음'}
            </p>
        </div>
    );
};

export default Test5;