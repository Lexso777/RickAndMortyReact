import React from 'react';
import style from './ButtonShowMore.module.css'

const ButtonShowMore = ({onClick}) => {

    return (
        <button type='button' className={style.btn} onClick={onClick}>
            LOAD MORE
        </button>
    );
};

export default ButtonShowMore;