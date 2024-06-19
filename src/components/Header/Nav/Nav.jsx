import React from 'react';
import style from './Nav.module.css';


export const Nav = props => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <a href='#advantages'>Почему с нами выгодно?</a>  
        </li>
        <li className={style.item}>
          <a href='#registration'>Регистрация</a>
        </li>
        <li className={style.item}>
          <a href='#feedback'>Отзывы</a>
        </li>
      </ul>
    </nav>
  );
};