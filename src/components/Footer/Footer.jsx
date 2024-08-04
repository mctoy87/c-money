import React from 'react';
import style from './Footer.module.css';
import { Layout } from '../Layout/Layout';
import logo from './img/logo.svg';
import { ReactComponent as TelgramIcon } from './img/telegram.svg';
import { ReactComponent as TwitterIcon } from './img/twitter.svg';
import { YandexMap } from './YandexMap/YandexMap';

export const Footer = props => {
  return (
    <footer className={style.footer}>
      <h2 className="visually-hidden">
        "Подвал" сайта с контактами и необходимой информацией
      </h2>
      <Layout>
          <div className={style.wrapper}>
          <div className={style.logoWrap}>
            <img className={style.logo} src={logo} alt="Логотип C-money" />
          </div>
            <ul className={style.links}>
              <li className={style.linkItem}>
                <a href="/" className={style.link}>
                  О&nbsp;компании
                </a>
              </li>
              <li className={style.linkItem}>
                <a href="#feedback" className={style.link}>
                  Отзывы
                </a>
              </li>
              <li className={style.linkItem}>
                <a href="#registration" className={style.link}>
                  Регистрация
                </a>
              </li>
              <li className={style.linkItem}>
                <a href="#advantages" className={style.link}>
                  Почему с&nbsp;нами выгодно?
                </a>
              </li>
            </ul>

            <div className={style.contactsWrap}>
              <ul className={style.contacts}>
                <li className={style.contactItem}>Контакты</li>
                <li className={style.contactItem}>
                  <a href="tel:+79213474997" className={style.contact}>
                    +7 921 347-49-97
                  </a>
                </li>
                <li className={style.contactItem}>
                  <a href="mailto:C-Money@gmail.com" className={style.contact}>
                    C-Money@gmail.com
                  </a>
                </li>
                <li className={style.address}>
                  <p className={style.contact}>
                    г. Москва ул. Новослободская 120/2 54
                  </p>
                </li>
              </ul>

              <ul className={style.socialList}>
                <li className={style.socialItem}>
                  <a href="#telegram" className={style.socialLink}>
                    <TelgramIcon />
                  </a>
                </li>
                <li className={style.socialItem}>
                  <a href="#twitter" className={style.socialLink}>
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.mapWrapper}>
              <YandexMap className={style.map} style={{ width: '100%', height: '100%' }}/>
            </div>
          </div>

          <p className={style.copyright}>© C-Money, 2022</p>
      </Layout>
    </footer>
  );
};