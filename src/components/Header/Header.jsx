import style from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/svg/headerLogo.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    // useEffect(() => {
    //     if (open) {
    //         document.body.classList.add(style.no_scroll); 
    //     } else {
    //         document.body.classList.remove(style.no_scroll); 
    //     }
    // }, [open]);

    return (
        <header className={style.header}>
            <nav className={style.header__menu}>
                <div className={style.logo}><Logo /></div>
                <ul className={`${style.header__menu__container} ${open ? style.open : ""}`}>
                    <li className={style.header__menu__item}>
                        <NavLink to={'/characters'}>
                            <div to={'characters'}
                                onClick={() => {
                                    toggleMenu(false);
                                }}>
                                Characters
                            </div>
                        </NavLink>
                    </li>
                    <li className={style.header__menu__item}>
                        <NavLink to={'/locations'}>
                            <div to={'locations'}
                                onClick={() => {
                                    toggleMenu(false);
                                }}>
                                Locations
                            </div>
                        </NavLink>
                    </li>
                    <li className={style.header__menu__item}>
                        <NavLink to={'/episodes'}>
                            <div to={'episodes'}
                                onClick={() => {
                                    toggleMenu(false);
                                }}>
                                Episodes
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <button className={`${style.burger_btn} ${open ? style.open : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;