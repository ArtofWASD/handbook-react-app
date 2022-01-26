import React, { useState, useEffect } from 'react';
const Test = () => {

    const [cars, setCars] = useState([])

     useEffect(() => {
         fetch('http://localhost:3001/models')
        .then(result => result.json())
        .then(data => setCars(data))
    }, [])

    const res = (cars != null && cars.length > 1) ? cars.find((item) => item.id === 1) : null;
    console.log(res);

    return (
        <div className=" py-5">
            {res &&(
                <div>
                    id this page is {res.id}
                </div>
            )}
        </div>
    );
}

export default Test;

