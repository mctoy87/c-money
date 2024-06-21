import React from 'react';
import style from './Hero.module.css';
import Layout from '../../Layout';

export const Hero = props => {
  return (
    <section className={style.hero}>
      <Layout className={style.container}>
        <div className={style.heroWrap}>
          <h1 className={style.title}>Платформа C-Money</h1>
          <p className={style.text}>Удобная платформа для хранения счётов, перевода валюты и&nbsp;покупки криптовалюты</p>
          <a href='#registration' className={style.btn} >
            Зарегистрироваться
          </a>
        </div>
      </Layout>
    </section>
  )
};