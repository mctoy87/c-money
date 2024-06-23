import React from 'react';
import style from './Footer.module.css';
import { Layout } from '../Layout/Layout';
import { Logo } from '../Header/Nav/Logo';

export const Footer = props => {
  return (
    <footer className={style.container}>
      <h2 className='visully-hidden'>"Подвал" сайта с контактами и необходимой информацией</h2>
      <Layout>
        <Logo />
      </Layout>
    </footer>
  )
};