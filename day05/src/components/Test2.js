import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [ cnt , setCnt ] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()

    const onColor = ()  => {
        setCnt( cnt + 1 )
        ref1.current.style.color = 'pink'
        ref2.current.style.color = 'green'
    }

    // mount / update ( 많이 사용하지 않는다 )
    useEffect( ()  => {
        console.log('useEffect')
        ref1.current.style.color='hotpink'
    })

    return (
        <div>
           <h2> Hooks  = useEffect 설명 </h2> 
           <h1>카운트 : {cnt} </h1>
           <h1 ref={ ref1 }>useEffect </h1>
           <h1 ref={ ref2 }>useLayoutEffect </h1>
           <button onClick={ onColor }>컬러와 숫자 증가</button>
        </div>
    );
};

export default Test2;
/*
Hooks
Effect Hook을 사용하면 함수 컴포넌트에서 side effect (부수효과) 를 수행 
부수효과 (side effect) : 함수가 결과값을 반환하는것 외에 다른 일을 할때 그 함수는 부수효과를 가진다 
부수효과  : 비동기통신 요청/응답 , DOM조작 , 구독/취소 등 

class 형 : 
라이프사이클 : 
componentDidMount : 처음 실행후 
componentDidUpdate : 값이 변경된 후 
componentWillUnmount : 닫기, 로딩이 끝난후 

함수형 위 3개를 합쳐놓은것이 useEffect 이다 

 - useEffect : 화면에 렌더링이 완료된 후 
 - 컴포넌트가 렌더링 될때마다 업데이트 작업을 수행 
 
 ** 화면에 그려진 후 실행 
형식)
useEffect 형식
useEffect( 콜백함수)
1. mount / update ( 많이 사용하지 않는다 )
useEffect( () => {
    mount / update
    실행문
})

2. mount ( 한번만 실행 )
useEffect( ()  => {
     mount 
}, [] )

3.  mount / update ( 많이 사용한다 )
의존값 : 업데이트 되는값 , 특정 state , 특정 props *** 
useEffect( () => {
     mount / update
}, [의존값] )


4. 정리(Clean-up) 사용할경우 
useEffect( ()  => {
    실행문 : mount / update

    //뒷정리
    return() => {
       정리(Clean-up)
    }
},[의존값])

*/
