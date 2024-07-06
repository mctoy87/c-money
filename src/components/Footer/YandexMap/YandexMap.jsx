// import { useEffect, useState } from 'react';
// import style from './YandexMap.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
// import { debounceRaf } from '../../../util/debounce';

export const YandexMap = () => {
  
  // const getMapWidth = (screenWidth) => { // получаем ширину блока ЯКарты для адаптива
  //   // if (screenWidth > 1110) {
  //   //   return '420px'; // например, для больших экранов
  //   // } else if (screenWidth < 1110 && screenWidth > 768) {
  //   //   console.log('Ширина экрана менее 1041 пикселя');
  //   //   return '355px'; // для средних экранов
  //   // } else {
  //   //   return '100%'; // для маленьких экранов
  //   // }

  //   if (screenWidth > 800) {
  //     return '100%';
  //   } else {
  //     return '100%'; // для tablet экранов
  //   }
  // }
  
  // const [mapWidth, setMapWidth] = useState(() => getMapWidth(window.document.documentElement.clientWidth)); // задаем ширину экрана

  // useEffect(() => {
  //   const handleResize = () => { // меняем ширину ЯКарты в зависимости от ширины экрана пользователя
  //     setMapWidth(getMapWidth(window.document.documentElement.clientWidth));
  //   };
    
  //   const debounceResize = debounceRaf(handleResize); // прогоняем функции через debounce

  //   // handleResize(); // Вызов handleResize при монтировании компонента

  //   window.addEventListener('resize', debounceResize);

  //   return () => {
  //     window.removeEventListener('resize', debounceResize);
  //   }
  // }, []);


  const mapState = {
    center: [55.788528, 37.593039], // Координаты центра карты
    zoom: 14 // Масштаб карты
  }

  const placemarkOptions = {
    iconColor: '#2e00b1',
  };

  return (
    <YMaps
      query={{
        apikey: '4ac7d6e0-ce6b-4f2c-979b-077f7cc90c8d',
        lang: 'ru_RU'
      }}
    >
      <Map
        defaultState={mapState} 
        width="100%" 
        height="100%"
      >
        <Placemark 
          geometry={mapState.center} 
          options={placemarkOptions}
        />
      </Map>
    </YMaps>
  )
};