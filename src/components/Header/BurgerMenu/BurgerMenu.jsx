import { useState } from 'react';
import style from './BurgerMenu.module.css';
import { Logo } from '../Logo/Logo';
import { ReactComponent as BurgerBtn } from './img/menu.svg';
import { ReactComponent as CloseBtn } from './img/close.svg';

export const BurgerMenu = props => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // открыт ли список бургер-меню
  
  return (
    <div className={style.headerWrap}>
      <div className={`${style.burgerMenu} ${isDropdownOpen ? style.burgerMenu_open : ''}`}>
        <Logo />
        <button className={style.burgerBtn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}  type='button'>
          {isDropdownOpen ? <CloseBtn width={14} height={14}/> : <BurgerBtn width={24} height={24}/>}
        </button>
      </div>

      {isDropdownOpen && (
          <nav className={style.nav}>
            <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
              <li className={style.item}>
                <a href='#advantages'>Почему с нами выгодно?</a>  
              </li>
              <li className={style.item}>
                <a href='#registration'>Регистрация</a>
              </li>
              <li className={style.item}>
                <a href='#feedback'>Отзывы</a>
              </li>
            </ul>
          </nav>
      )}
    </div>
  );
};