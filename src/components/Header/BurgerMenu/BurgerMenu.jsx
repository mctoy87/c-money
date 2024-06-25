import { useEffect, useState } from 'react';
import style from './BurgerMenu.module.css';
import { ReactComponent as BurgerBtn } from './img/menu.svg';
import { ReactComponent as CloseBtn } from './img/close.svg';

export const BurgerMenu = props => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // открыт ли список бургер-меню
  const [isDropDown, setIsDropDown] = useState(true); // влючен ли сам dropdown бургер-меню

  const handleResize = () => {
    if (document.documentElement.clientWidth < 930) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };
  
  useEffect(() => {
    handleResize();

    // return () => {

    // }
  }, [])

  return (
    <div className={style.burgerMenu}>
      {isDropDown && (
        <button className={style.burgerBtn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}  type='button'>
          {isDropdownOpen ? <CloseBtn width={24} height={24}/> : <BurgerBtn width={24} height={24}/>}
        </button>
      )}
      {(isDropdownOpen || !isDropDown) && (
        <nav className={`${style.nav} ${isDropdownOpen ? style.open : ''}}`}>
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