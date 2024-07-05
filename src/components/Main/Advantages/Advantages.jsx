import React from 'react';
import style from './Advantages.module.css';
import { Layout } from '../../Layout/Layout';

export const Advantages = props => {
  return (
    <section className={style.advantages}>
      <Layout>
        <h2 className={style.title}>Почему с&nbsp;нами выгодно?</h2>
        <ul className={style.list}>
          <li className={style.item}>
            <p className={`${style.itemHeader} ${style.itemHeader_1}`}>Статистика</p>
            <p className={style.itemText}>можно быстро отследить статистику доходов и&nbsp;расходов</p>
          </li>
          <li className={style.item}>
            <p className={`${style.itemHeader} ${style.itemHeader_2}`}>Надёжность</p>
            <p className={style.itemText}>с&nbsp;нами ваши счета в&nbsp;безопасности</p>
          </li>
          <li className={style.item}>
            <p className={`${style.itemHeader} ${style.itemHeader_3}`}>Обмен валюты</p>
            <p className={style.itemText}>обмен валюты по&nbsp;самому выгодному курсу
            </p>
          </li>
          <li className={style.item}>
            <p className={`${style.itemHeader} ${style.itemHeader_4}`}>Удобство</p>
            <p className={style.itemText}>удобная платформа для&nbsp;отслежки счётов</p>
          </li>
        </ul>
      </Layout>
    </section>
  );
};