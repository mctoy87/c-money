import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import { Logo } from './Logo/Logo';
import { Hero } from './Hero/Hero';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';


export const Header = props => {
  return (
    <section className={style.header}>
      <Layout>
        <header className={style.headerWrap}>
          <Logo />
          <BurgerMenu/>
        </header>
        <Hero />
      </Layout>
    </section>
  )
};