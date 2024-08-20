import React from 'react';
import style from './Select.module.css'

const Status = ({onChangeStatus}) => {
    
    return (
        <select
            className={style.select}
            defaultValue=""
            onChange={(e) => onChangeStatus(e.target.value)}
        >
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    );
};

export default Status;