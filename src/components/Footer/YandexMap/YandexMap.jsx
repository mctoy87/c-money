import React from 'react';
// import style from './YandexMap.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YandexMap = props => {
  const mapState = {
    center: [55.788528, 37.593039], // Координаты центра карты
    zoom: 14 // Масштаб карты
  }

  const placemarkOptions = {
    iconColor: '#2e00b1',
  };

  return (
    <YMaps>
      <Map
        defaultState={mapState} 
        width="580px" 
        height="260px"
      >
        <Placemark 
          geometry={mapState.center} 
          options={placemarkOptions}
        />
      </Map>
    </YMaps>
  )
};