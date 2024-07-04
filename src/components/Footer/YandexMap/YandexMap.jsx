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
    <YMaps
      query={{
        apikey: '4ac7d6e0-ce6b-4f2c-979b-077f7cc90c8d',
        lang: 'ru_RU'
      }}
    >
      <Map
        defaultState={mapState} 
        width="355px" 
        height="200px"
      >
        <Placemark 
          geometry={mapState.center} 
          options={placemarkOptions}
        />
      </Map>
    </YMaps>
  )
};