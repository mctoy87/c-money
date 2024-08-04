import React from 'react';
import style from './Registration.module.css';
import { Tabs } from './Tabs/Tabs';
import { Layout } from '../../Layout/Layout';

export const Registration = props => {
  return (
    <section className={style.registration}>
      <Layout>
        <h2 className={style.title}>Как зарегистрироваться на&nbsp;платформе</h2>
        <p className={style.about}>Пошагово заполните все&nbsp;поля формы</p>
        <Tabs />


        <form className={style.form}>
          <fieldset className={style.fieldset}>
            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='name'>Имя</label>
              <input className={style.input} type='text' id='name' autoComplete='given-name'/>
            </div>

            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='surname'>Фамилия</label>
              <input className={style.input} type='text' id='surname'/>
            </div>

            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='patronymic'>Отчество</label>
              <input className={style.input} type='text' id='patronymic'/>
            </div>

            <div className={style.submitWrap}>
              <button className={style.submit}>Далее</button>
            </div>
          </fieldset>
          
          <fieldset className={`${style.fieldset} visually-hidden`}>
            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='tel'>Телефон</label>
              <input className={style.input} type='tel' id='tel' autoComplete='tel'/>
            </div>

            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='mail'>Электронная почта</label>
              <input className={style.input} type='mail' id='mail' autoComplete='email'/>
            </div>

            <div className={style.submitWrap}>
              <button className={style.submit}>Далее</button>
            </div>
          </fieldset>
          
          <fieldset className={`${style.fieldset} visually-hidden`}>
            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='login'>Придумайте логин</label>
              <input className={style.input} type='text' id='login'/>
            </div>

            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='password'>Придумайте пароль</label>
              <input className={style.input} type='text' id='password'/>
            </div>

            <div className={style.inputWrap}>
              <label className={style.label} htmlFor='passwordRepeat'>Повторите пароль</label>
              <input className={style.input} type='text' id='passwordRepeat'/>
            </div>

            <div className={style.submitWrap}>
              <button className={style.submit}>Далее</button>
            </div>
          </fieldset>
        </form>
      </Layout>

    </section>
  );
};