import React, {useState, useRef} from 'react'

export default function Test3() {
    const no = useRef(1) //고유번호 처리 - 번호가 유지된다
    const [data, setData] = useState([])
    const names = '김다미, 최우식, 김성철, 노정의, 박진주, 전지현, 주지훈, 오정세, 성동일, 고민시'.split(',')
    //문자열을 배열로 만들기 : split() 활용

    const onAdd = () => {
        const ran = Math.floor(Math.random()*names.length)
        setData([
            ...data,
            {
                id: no.current ++,  //data.length를 쓰지 않는 이유 : 데이터가 수정, 삭제될 경우 length가 변경이 되기 때문에 데이터의 넘버링이 고유하지 않다. 따라서 고유한 값을 만들어주기위해 ref를 사용햇으며, ref는 항상 current와 함께 움직이기 때문에 no.current라고 표시!
                text: names[ran]
            }
            ])
    }
    return (
        <div>
            <button onClick={onAdd}>추가</button>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.text}
                </p>)
            }
        </div>
    )
}
