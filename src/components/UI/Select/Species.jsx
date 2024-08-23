import React from 'react';
import style from './Select.module.css'

const Species = ({searchSpecies}) => {
    return (
        <select
        onChange={(e)=> searchSpecies(e.currentTarget.value)}
         className={style.select} 
         defaultValue="">
            <option value="">Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
            <option value="unknown">Unknown</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Mythological Creature">Mythological Creature</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Cronenberg">Disease</option>
        </select>
    );
};

export default Species;