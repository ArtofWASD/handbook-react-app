import React from 'react';

const Data = [
  {
    image: <img src="https://as1.ftcdn.net/v2/jpg/04/51/43/06/1000_F_451430681_CEfvPRKH7b4DVM528jqzE2iJWPvjBgXn.jpg" alt="" />,
    label: 'Ford Transit',
    year: '1965-2022',
    description: 'Краткое описание модели',
    id: 1,
    childCars: [
      {
        id: 11,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/91/87/27/1000_F_391872715_6Ko7Z5dU75FYsZO3zuuRsYaTJkbNDiC9.jpg' alt='' />,
        lable: "Ford Transit",
        year: "1965-1886"
      },
      {
        id: 12,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/05/75/89/1000_F_305758969_89g9w6B3h4I9s70AHdSqr863XwIyF6kE.jpg' alt='' />,
        lable: "Ford Transit CY",
        year: "1985-1992"
      },
      {
        id: 13,
        image: <img src='https://as1.ftcdn.net/v2/jpg/03/04/82/60/1000_F_304826060_uQhFrFQzPnPeHDpnw3Blj7mwDwnN1Ubm.jpg' alt='' />,
        lable: "Ford Transit DY",
        year: "1992-1994"
      },
      {
        id: 14,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/05/75/89/1000_F_305758969_89g9w6B3h4I9s70AHdSqr863XwIyF6kE.jpg' alt='' />,
        lable: "Ford Transit EY",
        year: "1994-2000"
      },
      {
        id: 15,
        image: <img src='https://as1.ftcdn.net/v2/jpg/03/05/75/76/1000_F_305757618_Iy7j1TYyAE1JMNTej0DyR2nsI4XzpRxx.jpg' alt='' />,
        lable: "Ford Transit FY",
        year: "2000-2006"
      },
      {
        id: 16,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/89/05/89/1000_F_389058907_Y06GRHHTFYyGcrSUWN7uEJJL6K0uWXEv.jpg' alt='' />,
        lable: "Ford Transit TT9",
        year: "2006-2014"
      },
      {
        id: 17,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/72/22/53/1000_F_372225323_tvpOCcSb1ce14oW4S9AJLcnMno8UkRDU.jpg' alt='' />,
        lable: "Ford Transit TTG",
        year: "2014-2019"
      },
      {
        id: 18,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/72/22/53/1000_F_372225323_tvpOCcSb1ce14oW4S9AJLcnMno8UkRDU.jpg' alt='' />,
        lable: "Ford Transit TTS",
        year: "2019-2022"
      },
    ]
  },
  {
    image: <img src="https://as1.ftcdn.net/v2/jpg/03/04/94/20/1000_F_304942092_Uq3eheyJJtVB0fOa4OvSmDFFuO0eFQkZ.jpg" alt="" />,
    label: 'Peugeot Boxer',
    year: '2006-2022',
    description: 'Краткое описание модели',
    id: 2,
    childCars: [
      {
        id: 21,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/04/94/21/1000_F_304942139_NcdgycGzcIWDg6NmH4aX1xjuRKhkBmxO.jpg' alt='' />,
        lable: "Peugeot Boxer",
        year: "до 2006"
      },
      {
        id: 22,
        image: <img src='https://as1.ftcdn.net/v2/jpg/04/00/41/62/1000_F_400416260_wyUAig40DxmLPgpUO7qolDXD6OGJkQtX.jpg' alt='' />,
        lable: "Peugeot Boxer",
        year: "2006-2022"
      }
    ]
  },
  {
    image: <img src="https://as2.ftcdn.net/v2/jpg/02/94/42/29/1000_F_294422930_7zVNahnVkWBz4xeUDJ0EMHVLS1jyN8GL.jpg" alt="" />,
    label: 'Citroen Jumper',
    year: '2006-2022',
    description: 'Краткое описание модели',
    id: 3,
    childCars: [
      {
        id: 31,
        image: <img src='https://as2.ftcdn.net/v2/jpg/03/37/72/21/1000_F_337722119_2efQavGPENf5WrwvqEsMepb7z3QzmzMe.jpg' alt='' />,
        lable: "Citroen Jumper",
        year: "до 2006"
      },
      {
        id: 32,
        image: <img src='https://as2.ftcdn.net/v2/jpg/04/46/33/65/1000_F_446336587_2F6h3hbE2JLOAyq1BZ3YNXa3e5yH4rjT.jpg' alt='' />,
        lable: "Citroen Jumper",
        year: "2006-2022"
      }
    ]
  },
]

export { Data };
