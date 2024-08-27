import React from 'react';
import style from './Filter.module.css'
import { ReactComponent as Glass } from '../../../assets/svg/magnifyingGlass.svg'


const Filter = ({name, searchByName, placeholder, customWidth }) => {

    return (
        <div className={style.filterGroup} style={{ '--input-width': customWidth }}>
            <div className={style.glass__svg}><Glass /></div>
            <input
                value={name}
                onChange={(event) => searchByName(event.currentTarget.value)}
                className={`${style.filterByName}`}
                type="text"
                placeholder={placeholder}
                 />
                
        </div>
    );
};

export default Filter;