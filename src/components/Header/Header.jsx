import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import { Hero } from './Hero/Hero';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Nav } from './Nav/Nav';


export const Header = props => {
  return (
    <header className={style.header}>
      <Layout>
          <Nav/>
          <BurgerMenu/>
        <Hero />
      </Layout>
    </header>
  )
};