import React from 'react';
import { BiAlarmAdd, BiAlarm ,BiBomb } from "react-icons/bi";
import { FcAddressBook , FcAlarmClock} from "react-icons/fc";
import Numeral from "numeral";
import moment from 'moment'

const Test1 = () => {
    return (
        <div>
           <h2 style={{fontSize:50, color:'red'}}> <BiAlarmAdd /> </h2> 
           <h2 style={{fontSize:50, color:'blue'}}> <BiAlarm /> </h2> 
           <h2 style={{fontSize:50, color:'hotpink'}}> <BiBomb /> </h2> 
           <h2 style={{fontSize:50 }}> <FcAddressBook /> </h2> 
           <h2 style={{fontSize:50 }}> <FcAlarmClock /> </h2> 
           <h2 style={{fontSize:30 }}> { Numeral(1234567).format(0,0) } </h2> 
           <h2 style={{fontSize:30 }}> { Numeral(3540000).format(0,0) } </h2> 
           <h2 style={{fontSize:30 }}> { moment('20220116').format('YYYY.MM.DD') } </h2> 
        </div>
    );
};

export default Test1;