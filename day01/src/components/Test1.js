import React from 'react';

const Test1 = () => {
    return (
        <>
            <h2>JSX문법</h2>
            <p>한줄이상일 경우 div, Fragment(그룹) 처리한다 </p>
            <p> Fragment = 빈태그 </p>
            <p> 열린태그,닫힌태그 / 독립태그/  </p>
            <img src="" />
            <input />
            <br />
            <hr />
            //한줄주석 
            /*
                여러줄주석
            */
            {/* 주석 */}

            <p
                //한줄주석 
                /*
                    여러줄 주석
                */              
            >
                나는 연습입니다. 
            </p>
        </>
    );
};

export default Test1;