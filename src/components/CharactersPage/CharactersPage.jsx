import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/RickAndMortyCharacterPage.svg'
import { ReactComponent as Glass } from '../../assets/svg/magnifyingGlass.svg'
import style from './CharactersPage.module.css'
import Module from '../UI/Module/Module';
import Species from '../UI/Select/Species';
import Status from '../UI/Select/Status';
import Gender from '../UI/Select/Gender';

const CharactersPage = () => {

    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

    const toggleModule = () => {
        setMoreFiltersOpen(!moreFiltersOpen)
    }

    return (
        <div className={style.charactersPage__container}>
            <div className={style.logo}><Logo /></div>
            <div className={style.filters}>
                <div className={style.filterGroup}>
                    <div className={style.glass__svg}><Glass /></div>
                    <input className={style.filterByName} type="text" placeholder='Filter by name...' />
                </div>
                <div className={style.species}><Species/></div>
                <div className={style.status}><Status/></div>
                <div className={style.gender}><Gender/></div>
            </div>
            <div className={`${style.moreFiltersBtn} ${moreFiltersOpen ? style.open : ""}`}>
                <button className={`${style.moreFilters} ${moreFiltersOpen ? style.open : ""}`}
                    onClick={toggleModule}>
                    ADVANCED FILTERS
                </button>
                {moreFiltersOpen ? 
                <Module toggle={toggleModule}>
                    <Species/>
                    <Status/>
                    <Gender/>
                </Module> : ''}
            </div>
        </div>
    );
};

export default CharactersPage;