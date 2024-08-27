import React from 'react';
import style from './ArrowGoBack.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../../assets/svg/arrow_back_24px.svg'

const ArrowGoBack = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className={style.arrow_go_back} onClick={goBack}>
            <ArrowBack />
            <button className={style.btn}>GO Back</button>
        </div>
    );
};

export default ArrowGoBack;