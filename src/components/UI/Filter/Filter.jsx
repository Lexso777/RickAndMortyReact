import React from 'react';
import style from './Filter.module.css'
import { ReactComponent as Glass } from '../../../assets/svg/magnifyingGlass.svg'

const Filter = ({name, searchByName}) => {
    return (
        <div className={style.filterGroup}>
            <div className={style.glass__svg}><Glass /></div>
            <input
                value={name}
                onChange={(event) => searchByName(event.currentTarget.value)}
                className={style.filterByName}
                type="text"
                placeholder='Filter by name...' />
        </div>
    );
};

export default Filter;