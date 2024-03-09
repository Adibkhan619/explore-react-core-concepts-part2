import './Friends.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Friend from './Friend.jsx'

export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    }, [])

    return (
        <div className='box'>
            <h3 >Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/*
 * 1. State to hold data
 * 2. use effect with dependency array
 * 3. use fetch  to load data
 * 4. set loaded data into state
 * 5. display data on the component
 */