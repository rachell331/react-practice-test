import React, {useState, useRef} from 'react'

export default function Test4() {
    const no = useRef(1);
    const idRef = useRef(); //초기화 목적

    const [data, setData] = useState([])
    const [form, setForm] = useState({
        userid: '',
        userpw: ''
    })
    const {userid, userpw} = form;
    const changeInputValue = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const onAdd = (e)=> {
        e.preventDefault();

        //공란일 경우 데이터가 들어가지 않도록 하기 위함
        // if(userid.length === 0 || userpw.length === 0){
        //     return 
        // }
        if(!userid || !userpw) return

        // setData([...data, {id: no.current ++, ...form}]) //이렇게 하면 왜 안될까? - 커서 이동이 제대로 되지 않음, 추가는 되는데
        setData([
            ...data,
            {
                id:no.current ++,
                userid ,
                userpw
                //앞뒤 키와 value가 일치하는 경우 한 번만 적어도 ok
            }
        ])
        setForm({
            userid: '',
            userpw: ''
        })
        idRef.current.focus() //idRef로 커서 이동
    }

    return (
        <div>

        <form onSubmit={onAdd}>
        {/* 자체 submit 성격을 가짐 */}
            <input type="text" value={userid} name="userid" onChange={changeInputValue} ref={idRef}/>
            <input type="text" value={userpw} name="userpw" onChange={changeInputValue} />
            <button type="submit">추가</button>
        </form>

            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                    {item.id} / {item.userid} / {item.userpw}
                    </li>)
                }
            </ul>
        </div>
    )
}
