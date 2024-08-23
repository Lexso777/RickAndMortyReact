import React from 'react';
import Filter from '../UI/Filter/Filter';
import Species from '../UI/Select/Species';
import Gender from '../UI/Select/Gender';
import Status from '../UI/Select/Status';
import style from '../../components/CharactersPage/CharactersPage.module.css'


const CharactersFilters = ({characterName, updateFilter}) => {
    return (
        <>
            <Filter name={characterName} searchByName={(value) => updateFilter('name', value)}/>
            <div className={style.extrafilters}><Species  searchSpecies={(value) => updateFilter('species', value)}/></div>
            <div className={style.extrafilters}><Gender searchGender={(value) => updateFilter('gender', value)} /></div>
            <div className={style.extrafilters}><Status searchStatus={(value) => updateFilter('status', value)} /></div>
        </>
    );
};

export default CharactersFilters;