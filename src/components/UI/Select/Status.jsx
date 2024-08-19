import React from 'react';
import style from './Select.module.css'

const Status = () => {
    return (
        <select className={style.select} defaultValue="">
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    );
};

export default Status;