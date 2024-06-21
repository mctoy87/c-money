import React from 'react';
import style from './Main.module.css';
import { Advantages } from './Advantages/Advantages';
import { Registration } from './Registration/Registration';

export const Main = props => {
  return (
    <main className={style.main}>
      <Advantages />
      <Registration />
    </main>
  );
};