
//partsgroup
import { battery } from '../img/battery.png';
// Ford's
import cardTTS from '../img/TTS.png';
import cardTT9 from '../img/TT9.png';
import cardFY from '../img/FY.png';
import cardEY from '../img/EY.png';
import cardDY from '../img/DY.png';
import cardCY from '../img/CY.png';
import cardTransit from '../img/Necro.png';
// Boxer'src
import cardOldBoxer from '../img/oldBoxer.png';
import cardNewBoxer from '../img/newBoxer.png';
// Jumper's
import cardOldJumper from '../img/oldBoxer.png';
import cardNewJumper from '../img/newJumper.png';

const Data = [
  {
    image: <img src={cardTTS} alt="" />,
    label: 'Ford Transit',
    year: '1965-2022',
    description: 'Краткое описание модели',
    id: 1,
    childCars: [
      {
        id: 11,
        image: <img src={cardTransit} alt='' />,
        label: "Ford Transit",
        year: "1965-1886"
      },
      {
        id: 12,
        image: <img src={cardCY} alt='' />,
        label: "Ford Transit CY",
        year: "1985-1992"
      },
      {
        id: 13,
        image: <img src={cardDY} alt='' />,
        label: "Ford Transit DY",
        year: "1992-1994"
      },
      {
        id: 14,
        image: <img src={cardEY} alt='' />,
        label: "Ford Transit EY",
        year: "1994-2000"
      },
      {
        id: 15,
        image: <img src={cardFY} alt='' />,
        label: "Ford Transit FY",
        year: "2000-2006"
      },
      {
        id: 16,
        image: <img src={cardTT9} alt='' />,
        label: "Ford Transit TT9",
        year: "2006-2014"
      },
      {
        id: 17,
        image: <img src={cardTTS} alt='' />,
        label: "Ford Transit TTG",
        year: "2014-2019"
      },
      {
        id: 18,
        image: <img src={cardTTS} alt='' />,
        label: "Ford Transit TTS",
        year: "2019-2022"
      },
    ]
  },
  {
    image: <img src={cardNewBoxer} alt="" />,
    label: 'Peugeot Boxer',
    year: '1990-2022',
    description: 'Краткое описание модели',
    id: 2,
    childCars: [
      {
        id: 21,
        image: <img src={cardOldBoxer} alt='' />,
        label: "Peugeot Boxer",
        year: "до 2006"
      },
      {
        id: 22,
        image: <img src={cardNewBoxer} alt='' />,
        label: "Peugeot Boxer",
        year: "2006-2022"
      }
    ]
  },
  {
    image: <img src={cardNewJumper} alt="" />,
    label: 'Citroen Jumper',
    year: '1990-2022',
    description: 'Краткое описание модели',
    id: 3,
    childCars: [
      {
        id: 31,
        image: <img src={cardOldJumper} alt='' />,
        label: "Citroen Jumper",
        year: "до 2006"
      },
      {
        id: 32,
        image: <img src={cardNewJumper} alt='' />,
        label: "Citroen Jumper",
        year: "2006-2022"
      }
    ]
  },
]

export { Data };
