import React, { useState, useEffect } from 'react';
const Test = () => {
    const [cars, setCars] = useState(undefined)
    useEffect(()=>{
        const getData = () => {
            fetch('http://localhost:3001/models')
                .then(result => result.json())
                .then(data => carList(data))
        }
            getData();        
    }, [])
    const carList = (data) => {
        const result = new Promise((resolve, reject) => {
            const res = data.find(item => item.id === 1)
            resolve(res)
        })
        .then(res => setCars(res))
    }
    const result = (cars) ? cars.cars.find(item => item.id == 11) : console.log("w8 for cars");
    return (
        <div className= "text-center py-5">
            {cars && (
                <div>
                    id this page is {cars.id}
                    {result &&(
                        <>
                        {result.id}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
export default Test;

