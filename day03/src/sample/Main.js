import React, { useState } from 'react';
import './style.css'
import TestStep1 from './TestStep1';
import TestStep2 from './TestStep2';
import TestStep3 from './TestStep3';
import TestStep4 from './TestStep4';

const Main = () => {
    const [ step  , setStep ] = useState( 1 )
    const [ form , setForm ] = useState({
        username:'' , age :'', addr:'' , tel:'', job:'', email:'', sex:'', interests:''
    })
    const  { username , age , addr , tel , job , email, sex, interests } = form 

    const changeInput = (e)  => {
        const { value , name } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    }


    const onPrev = ()  => {
        setStep( step -  1 )
    }
    const onNext = ()  => {
        setStep( step  + 1 )
    }


    return (
        <div className="wrap">
            {
                step === 1 && 
                <TestStep1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />
            }
            {
                step === 2 &&  
                // <TestStep2 job={job} email={email} sex={sex} interests={interests} changeInput={changeInput}onNext={onNext}  onPrev={onPrev} />
                <TestStep2 form={form} changeInput={changeInput}onNext={onNext}  onPrev={onPrev} />
            }
            {
                step === 3 &&
                // <TestStep3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} sex={sex} interests={interests} onNext={onNext}  onPrev={onPrev} />
                <TestStep3 {...form} onNext={onNext}  onPrev={onPrev} />
            }
           
           {
               step === 4 && 
               <TestStep4 username={username}/>
           }
        </div>
    );
};

export default Main;