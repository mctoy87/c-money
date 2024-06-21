import React from 'react';
import style from './Tabs.module.css';

export const Tabs = props => {
  return (
    <ul className={style.tabs}>
      <li className={style.item}>
        <button className={style.link} type='button'>1</button>
      </li>
      <li className={style.item}>
        <button className={style.link} type='button'>2</button>
      </li>
      <li className={style.item}>
        <button className={style.link} type='button'>3</button>
      </li>
    </ul>
  )
};