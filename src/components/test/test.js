import React, { useState, useEffect } from 'react';
const Test = () => {

    const [cars, setCars] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3001/models')
    //         .then(result => result.json())
    //         .then(data => setCars(data))
    // }, [])


    function getData() {
        // Запрос на сервер
        fetch('http://localhost:3001/models')
        // обрабатываем промис и получаем json
            .then(result => result.json())
            // передаём json в функцию
            .then(data => carList(data))
        
    }
    getData();

    // Создаём функцию которая на входе принимает массив обработанный в getDataS
    const carList = (data) => {
        // находим элемент в массиве по id
        const result = new Promise((resolve, reject) => {
            const res = data.find(item => item.id === 1)
            resolve(res)
        })
        .then(res => console.log(res))
    }

    return (
        <div className= "text-center py-5">
            {cars && (
                <div>
                    id this page is {cars.id}
                </div>
            )}
        </div>
    );
}

export default Test;

