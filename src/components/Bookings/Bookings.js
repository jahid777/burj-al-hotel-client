import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/bookings') //ay url a data add koraisi database theke
        .then(res => res.json())
        .then(data =>{
            setBookings(data)
        })
    },[])
    return (
        <div>
            <h1>You have: {bookings.length}</h1>
            {
                bookings.map(book => <li>{book.name} From: {new Date(book.checkIn).toDateString('dd/MM/yyyy')} To: {new Date(book.checkOut).toDateString('dd/MM/yyyy')} </li>)
            }
        </div>
    );
};

export default Bookings;