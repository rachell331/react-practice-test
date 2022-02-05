import React, { useState } from 'react';
import coffeedata from '../assets/api/coffeedata';
import CoffeeList from './CoffeeList';
import Menu from './Menu';
import './style.css'

//const menulist = ['all','coldbrew','espresso','frappuccino','fizzio']
const menulist = ['all', ...new Set( coffeedata.map( item => item.name))]

const Starbucks = () => {
    const [ data , setData ] = useState( coffeedata )

    const onView  = ( name )  =>  {
        if( name === 'all' ) {
            setData( coffeedata )
        }else{
            setData( coffeedata.filter( item => item.name === name ))
        }
    }

    return (
        <div className="wrap">
            <Menu menulist={menulist} onView={onView} />
            <CoffeeList data={data} />
        </div>
    );
};

export default Starbucks;