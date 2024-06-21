import React from 'react';
import style from './Registration.module.css';
import { Tabs } from './Tabs/Tabs';

export const Registration = props => {
  return (
    <section className={style.registration}>
      <h2 className={style.title}>Как зарегистрироваться на&nbsp;платформе</h2>
      <p className={style.about}>Пошагово заполните все поля формы</p>
      <Tabs />


      <form className={style.form}>
        <fieldset className={style.fieldset}>
          <label for='name'>Имя</label>
          <input className={style.input} type='text' id='name'/>

          <label for='surname'>Фамилия</label>
          <input className={style.input} type='text' id='surname'/>

          <label for='patronymic'>Отчество</label>
          <input className={style.input} type='text' id='patronymic'/>
        </fieldset>
      </form>
    </section>
  );
};