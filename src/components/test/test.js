import React, { useState, useEffect } from 'react';

const Test = () => {

    const [cars, setCars] = useState([])

     useEffect(() => {
         fetch('http://localhost:3001/models')
        .then(result => result.json())
        .then(data => setCars(data))
    }, [])

    const res = cars.find((item) => item.id === 1);
   
    console.log(res.id);
    return (
        <div>

        </div>
    );
}

export default Test;

