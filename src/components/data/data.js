import React from 'react';

const Data = [
  {
    image: <img src="https://images.unsplash.com/photo-1530226438127-d6a61eb82ac8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />,
    label: 'Ford Transit',
    year: '1965-2022',
    description: 'Краткое описание модели',
    id: 1,
    childCars: [
      {
        id: 11,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit",
        year: "1965-1886"
      },
      {
        id: 12,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit CY",
        year: "1985-1992"
      },
      {
        id: 13,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit DY",
        year: "1992-1994"
      },
      
      {
        id: 14,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit EY",
        year: "1994-2000"
      }
    ]
  },
  {
    image: <img src="https://images.unsplash.com/photo-1605663485884-1f1c37b1f55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />,
    label: 'Peugeot Boxer',
    year: '2006-2022',
    description: 'Краткое описание модели',
    id: 2,
    childCars: [
      {
        id: 21,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit EY",
        year: "1994-2000"
      }
    ]
  },
  {
    image: <img src="https://images.unsplash.com/photo-1623587672045-0619ca96029f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />,
    label: 'Citroen Jumper',
    year: '2006-2022',
    description: 'Краткое описание модели',
    id: 3,
    childCars: [
      {
        id: 31,
        image: <img src='../../' alt='' />,
        lable: "Ford Transit EY",
        year: "1994-2000"
      }
    ]
  },
]

export { Data };
