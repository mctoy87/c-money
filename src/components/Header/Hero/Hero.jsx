import React from 'react';
import style from './Hero.module.css';

export const Hero = props => {
  return (
    <section className={style.hero}>
        <div className={style.heroWrap}>
          <h1 className={style.title}>Платформа C-Money</h1>
          <p className={style.text}>Удобная платформа для хранения счётов, перевода валюты и&nbsp;покупки криптовалюты</p>
          <a href='#registration' className={style.btn} >
            Зарегистрироваться
          </a>
        </div>
    </section>
  )
};