import React from 'react';
import style from './Select.module.css'

const Type = ({searchType}) => {
    return (
        <select
         onChange={(e)=> searchType(e.currentTarget.value)}   
         className={style.select} 
         defaultValue="">
            <option value="">Type</option>
            <option value="Planet">Planet</option>
            <option value="Cluster">Cluster</option>
            <option value="Space station">Space station</option>
            <option value="Microverse">Microverse</option>
            <option value="Resort">Resort</option>
            <option value="Fantasy town">Fantasy town</option>
            <option value="TV">TV</option>
            <option value="Dream">Dream</option>
            <option value="unknown">Unknown</option>
        </select>
    );
};

export default Type;