
// parts
import battery from '../img/battery.png';
import breakPads from '../img/break.png';
import carDoor from '../img/car_door.png';
import chasis from '../img/chassis.png';
import cooler from '../img/cooler.png';
import piston from '../img/piston.png';
import suspension from '../img/shockbreaker.png';
import stearing from '../img/wheels.png';
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
    id: 1,
    childCars: [
      {
        id: 11,
        image: <img src={cardTransit} alt='' />,
        label: "Ford Transit",
        year: "1965-1886",
        parts: [
          {
            id: 111,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
              {id:1111, title: "Замена двигателя", text:"Цилиндро-поршневую группу можно назвать сердцем любого двигателя внутреннего сгорания. В ЦПГ входят поршни с кольцами и гильзы блока цилиндров. Трущаяся пара, которая постоянно подвержена ударным нагрузкам и высоким температурам. Износ ЦПГ критичен и очень дорог в ремонте. Обслуживать там, как правило, нечего. Долгую правильную службу обеспечат частая смена моторного масла, дорогое топливо и оригинальные фильтры. О том, что цилиндро-поршневая группа на автомобилях Форд Транзит износилась, подскажет стук из-под капота либо высокий расход масла (уже при расходе масла около 500 и больше грамм на тысячу километров пробега, пора задуматься о ремонте). Высокий 'жор' масла может быть также из-за течей из-под сальников и прокладок, а также из-за износа маслосъемных колпачков. Их еще называют сальниками клапанов. Турбина также может гнать масло во впуск. Но если эти варианты проверены или устранены, то нужно готовиться к худшему варианту."},
              {id:1112, title: "Замена поршней", text:"Цилиндро-поршневую группу можно назвать сердцем любого двигателя внутреннего сгорания. В ЦПГ входят поршни с кольцами и гильзы блока цилиндров. Трущаяся пара, которая постоянно подвержена ударным нагрузкам и высоким температурам. Износ ЦПГ критичен и очень дорог в ремонте. Обслуживать там, как правило, нечего. Долгую правильную службу обеспечат частая смена моторного масла, дорогое топливо и оригинальные фильтры. О том, что цилиндро-поршневая группа на автомобилях Форд Транзит износилась, подскажет стук из-под капота либо высокий расход масла (уже при расходе масла около 500 и больше грамм на тысячу километров пробега, пора задуматься о ремонте). Высокий 'жор' масла может быть также из-за течей из-под сальников и прокладок, а также из-за износа маслосъемных колпачков. Их еще называют сальниками клапанов. Турбина также может гнать масло во впуск. Но если эти варианты проверены или устранены, то нужно готовиться к худшему варианту."},
              {id:1113, title: "Замена маховика", text:"Цилиндро-поршневую группу можно назвать сердцем любого двигателя внутреннего сгорания. В ЦПГ входят поршни с кольцами и гильзы блока цилиндров. Трущаяся пара, которая постоянно подвержена ударным нагрузкам и высоким температурам. Износ ЦПГ критичен и очень дорог в ремонте. Обслуживать там, как правило, нечего. Долгую правильную службу обеспечат частая смена моторного масла, дорогое топливо и оригинальные фильтры. О том, что цилиндро-поршневая группа на автомобилях Форд Транзит износилась, подскажет стук из-под капота либо высокий расход масла (уже при расходе масла около 500 и больше грамм на тысячу километров пробега, пора задуматься о ремонте). Высокий 'жор' масла может быть также из-за течей из-под сальников и прокладок, а также из-за износа маслосъемных колпачков. Их еще называют сальниками клапанов. Турбина также может гнать масло во впуск. Но если эти варианты проверены или устранены, то нужно готовиться к худшему варианту."},
              {id:1114, title: "Замена головки блока цилиндров", text:"Цилиндро-поршневую группу можно назвать сердцем любого двигателя внутреннего сгорания. В ЦПГ входят поршни с кольцами и гильзы блока цилиндров. Трущаяся пара, которая постоянно подвержена ударным нагрузкам и высоким температурам. Износ ЦПГ критичен и очень дорог в ремонте. Обслуживать там, как правило, нечего. Долгую правильную службу обеспечат частая смена моторного масла, дорогое топливо и оригинальные фильтры. О том, что цилиндро-поршневая группа на автомобилях Форд Транзит износилась, подскажет стук из-под капота либо высокий расход масла (уже при расходе масла около 500 и больше грамм на тысячу километров пробега, пора задуматься о ремонте). Высокий 'жор' масла может быть также из-за течей из-под сальников и прокладок, а также из-за износа маслосъемных колпачков. Их еще называют сальниками клапанов. Турбина также может гнать масло во впуск. Но если эти варианты проверены или устранены, то нужно готовиться к худшему варианту."},
              {id:1115, title: "Замена датчика охлаждающей жидкости", text:"Цилиндро-поршневую группу можно назвать сердцем любого двигателя внутреннего сгорания. В ЦПГ входят поршни с кольцами и гильзы блока цилиндров. Трущаяся пара, которая постоянно подвержена ударным нагрузкам и высоким температурам. Износ ЦПГ критичен и очень дорог в ремонте. Обслуживать там, как правило, нечего. Долгую правильную службу обеспечат частая смена моторного масла, дорогое топливо и оригинальные фильтры. О том, что цилиндро-поршневая группа на автомобилях Форд Транзит износилась, подскажет стук из-под капота либо высокий расход масла (уже при расходе масла около 500 и больше грамм на тысячу километров пробега, пора задуматься о ремонте). Высокий 'жор' масла может быть также из-за течей из-под сальников и прокладок, а также из-за износа маслосъемных колпачков. Их еще называют сальниками клапанов. Турбина также может гнать масло во впуск. Но если эти варианты проверены или устранены, то нужно готовиться к худшему варианту."}
            ]
          },
          {
            id: 112,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 113,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 114,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 115,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 116,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 117,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 118,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 12,
        image: <img src={cardCY} alt='' />,
        label: "Ford Transit CY",
        year: "1985-1992",
        parts: [
          {
            id: 121,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 122,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 123,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 124,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 125,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 126,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 127,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 128,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 13,
        image: <img src={cardDY} alt='' />,
        label: "Ford Transit DY",
        year: "1992-1994",
        parts: [
          {
            id: 131,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 132,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 133,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 134,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 135,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 136,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 137,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 138,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 14,
        image: <img src={cardEY} alt='' />,
        label: "Ford Transit EY",
        year: "1994-2000",
        parts: [
          {
            id: 141,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 142,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 143,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 144,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 145,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 146,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 147,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 148,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 15,
        image: <img src={cardFY} alt='' />,
        label: "Ford Transit FY",
        year: "2000-2006",
        parts: [
          {
            id: 151,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 152,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 153,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 154,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 155,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 156,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 157,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 158,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 16,
        image: <img src={cardTT9} alt='' />,
        label: "Ford Transit TT9",
        year: "2006-2014",
        parts: [
          {
            id: 161,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 162,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 163,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 164,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 165,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 166,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 167,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 168,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 17,
        image: <img src={cardTTS} alt='' />,
        label: "Ford Transit TTG",
        year: "2014-2019",
        parts: [
          {
            id: 171,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 172,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 173,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 174,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 175,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 176,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 177,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 178,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 18,
        image: <img src={cardTTS} alt='' />,
        label: "Ford Transit TTS",
        year: "2019-2022",
        parts: [
          {
            id: 181,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 182,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 183,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 184,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 185,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 186,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 187,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 188,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
    ]
  },
  {
    image: <img src={cardNewBoxer} alt="" />,
    label: 'Peugeot Boxer',
    year: '1990-2022',
    id: 2,
    childCars: [
      {
        id: 21,
        image: <img src={cardOldBoxer} alt='' />,
        label: "Peugeot Boxer",
        year: "до 2006",
        parts: [
          {
            id: 211,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 212,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 213,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 214,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 215,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 216,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 217,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 218,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 22,
        image: <img src={cardNewBoxer} alt='' />,
        label: "Peugeot Boxer",
        year: "2006-2022",
        parts: [
          {
            id: 221,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 222,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 223,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 224,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 225,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 226,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 227,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 228,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      }
    ]
  },
  {
    image: <img src={cardNewJumper} alt="" />,
    label: 'Citroen Jumper',
    year: '1990-2022',
    id: 3,
    childCars: [
      {
        id: 31,
        image: <img src={cardOldJumper} alt='' />,
        label: "Citroen Jumper",
        year: "до 2006",
        parts: [
          {
            id: 311,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 312,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 313,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 314,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 315,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 316,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 317,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 318,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },

        ],
      },
      {
        id: 32,
        image: <img src={cardNewJumper} alt='' />,
        label: "Citroen Jumper",
        year: "2006-2022",
        parts: [
          {
            id: 321,
            status: true,
            image: <img src={piston} alt='' />,
            title: "Двигатель",
            posts: [
            ]
          },
          {
            id: 322,
            status: true,
            image: <img src={carDoor} alt='' />,
            title: "Кузов",
            posts: [

            ]
          },
          {
            id: 323,
            status: true,
            image: <img src={stearing} alt='' />,
            title: "Мост",
            posts: [

            ]
          },
          {
            id: 324,
            status: true,
            image: <img src={chasis} alt='' />,
            title: "Рулевое",
            posts: [

            ]
          },
          {
            id: 325,
            status: true,
            image: <img src={suspension} alt='' />,
            title: "Подвеска",
            posts: [

            ]
          },
          {
            id: 326,
            status: true,
            image: <img src={cooler} alt='' />,
            title: "Охлаждение",
            posts: [

            ]
          },
          {
            id: 327,
            status: true,
            image: <img src={breakPads} alt='' />,
            title: "Тормоза",
            posts: [

            ]
          },
          {
            id: 328,
            status: true,
            image: <img src={battery} alt='' />,
            title: "Электрика",
            posts: [

            ]
          },
        ],
      }
    ]
  },
]
export { Data };