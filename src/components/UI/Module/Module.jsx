import React from 'react';
import style from './Module.module.css'

const Module = ({children, toggle}) => {
    
    return (
        <div className={style.module__container}>
            <div className={style.module}>
                <div className={style.filters}>Filters</div>
                <button className={style.btnClose} onClick={toggle}>
                    <span></span>
                    <span></span>
                </button>
                <div className={style.selects}>
                   {children}
                </div>
            </div>
         
        </div>
    );
};

export default Module;