import React from 'react';
import style from './Reviews.module.css';
import { Layout } from '../../Layout/Layout';
import review_1 from './img/1.jpg';
import review_2 from './img/2.jpg';
import review_3 from './img/3.jpg';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';

export const Reviews = props => {
  return (
    <section className={style.reviews}>
      <Layout>
        <h2 className={style.title}>Отзывы наших клиентов</h2>
        <div className={style.listWrap}>

          <button className={style.prevBtn} type='button'>
            <ArrowIcon/>
          </button>

          <ul className={style.list}>
          <li className={style.item}>
            <div className={style.imgWrap}>
              <img className={style.img} src={review_1} alt='Отзыв нашего клиента об услугах сервиса'/>
            </div>
            <p className={style.name}>Юлия С</p>
            <p className={style.review}>&laquo;Очень удобная платформа для открытия мультивалютных счётов&raquo;</p>
          </li>
          
          <li className={style.item}>
            <div className={style.imgWrap}>
              <img className={style.img} src={review_2} alt='Отзыв нашего клиента об услугах сервиса'/>
            </div>
            <p className={style.name}>Светлана Н</p>
            <p className={style.review}>&laquo;Пользуюсь платформой уже&nbsp;больше&nbsp;года, нравится, что можно быстро менять валюту по&nbsp;выгодному&nbsp;курсу&raquo;</p>
          </li>
          <li className={style.item}>
            <div className={style.imgWrap}>
              <img className={style.img} src={review_3} alt='Отзыв нашего клиента об услугах сервиса'/>
            </div>
            <p className={style.name}>Сергей А</p>
            <p className={style.review}>&laquo;Открыл счёт в&nbsp;биткоинах, могу быстро следить за&nbsp;курсом и&nbsp;делать обмен&raquo;</p>
          </li>
          </ul>

          <button className={style.nextBtn} type='button'>
            <ArrowIcon/>
          </button>

        </div>
      </Layout>
    </section>
  )
};