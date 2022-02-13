import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => {
    return (
        <ul>
           {
               friends.map( friend => <FriendItem  key={ friend.id }  friend={friend} /> )
           } 
        </ul>
    );
};

export default FriendList;