import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Nav from '../Header/Nav';
import Logo from './Nav/Logo';
import { Hero } from './Hero/Hero';


export const Header = props => {
  return (
    <section className={style.header}>
      <Layout>
        <header className={style.headerWrap}>
          <Logo />
          <Nav/>
        </header>
        <Hero />
      </Layout>
    </section>
  )
};