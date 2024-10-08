import React from 'react';
import style from './Select.module.css'

const Gender = ({searchGender}) => {
    return (
        <select
         onChange={(e)=> searchGender(e.currentTarget.value)}   
         className={style.select} 
         defaultValue="">
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
    );
};

export default Gender;