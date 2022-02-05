import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menulist, onView }) => {
    return (
        <ul className="menu">
            {
                menulist.map( (item, index) => <MenuItem key={index} item={item} onView={ onView }/>)
            }
        </ul>
    );
};

export default Menu;