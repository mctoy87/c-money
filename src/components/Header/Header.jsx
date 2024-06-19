import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Nav from '../Header/Nav';
import Logo from './Nav/Logo';


export const Header = props => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.headerWrap}>
          <Logo />
          <Nav/>
        </div>
        <h1 className={style.title}>Платформа C-Money</h1>
        <p className={style.text}>Удобная платформа для хранения счётов, перевода валюты и покупки криптовалюты</p>
      </Layout>
    </header>
  )
};