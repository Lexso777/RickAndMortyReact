import React from 'react';
import Filter from '../UI/Filter/Filter';
import style from './FiltersField.module.css'
import Gender from '../UI/Select/Gender';
import Species from '../UI/Select/Species';
import Status from '../UI/Select/Status';


const FiltersField = React.memo(({
    characterName,
    searchByName,
    searchSpecies,
    searchGender,
    searchStatus
}) => {
    return (
        <div className={style.filters}>
            <Filter name={characterName} searchByName={searchByName} />
            <div className={style.species}><Species onChangeSpecies={searchSpecies} /></div>
            <div className={style.gender}><Gender onChangeGender={searchGender} /></div>
            <div className={style.status}><Status onChangeStatus={searchStatus} /></div>
        </div>
    );
});

export default FiltersField;