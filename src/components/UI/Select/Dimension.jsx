import React from 'react';
import style from './Select.module.css'

const Dimension = ({searchDimension}) => {
    return (
        <select
         onChange={(e)=> searchDimension(e.currentTarget.value)}   
         className={style.select} 
         defaultValue="">
            <option value="">Dimension</option>
            <option value="Dimension C-137">Dimension C-137</option>
            <option value="unknown">Unknown</option>
            <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
            <option value="Replacement Dimension">Replacement Dimension</option>
            <option value="Cronenberg Dimension">Cronenberg Dimension</option>
            <option value="Dimension 5-126">Dimension 5-126</option>
        </select>
    );
};

export default Dimension;