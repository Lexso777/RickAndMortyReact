import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/RickAndMortyCharacterPage.svg'
import style from './CharactersPage.module.css'
import Module from '../UI/Module/Module';
import Species from '../UI/Select/Species';
import Status from '../UI/Select/Status';
import Gender from '../UI/Select/Gender';
import { fetchCharacters } from '../../Redux/slices/CharactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CharactersCard from '../UI/Cards/Characters/CharactersCard';
import ButtonShowMore from '../UI/ButtonShowMore/ButtonShowMore';
import { getCharacterGender, getCharacterName, getCharacterSpecies, getCharacterStatus } from '../../Redux/slices/filtersSlice';
import Filter from '../UI/Filter/Filter';

const CharactersPage = () => {

    const dispatch = useDispatch();
    const { fetchData , status } = useSelector((state) => state.CharactersPageSlice);
    const {characterName, characterStatus, characterGender, characterSpecies} = useSelector((state) => state.filtersSlice);


    const [page, setPage] = useState(1);
    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

    const characters = fetchData.results;

    const toggleModule = () => {
        setMoreFiltersOpen(!moreFiltersOpen)
    }

    useEffect(() => {
        dispatch(fetchCharacters({page , characterName, characterStatus, characterGender, characterSpecies}));
    }, [dispatch, page , characterName, characterStatus, characterGender, characterSpecies])



    const nextPage = () => {    
        setPage(page + 1);
    }

    const searchByName = (event) => {
        dispatch(getCharacterName(event));
        setPage(1);
    }

    const searchStatus = (status) => {
        dispatch(getCharacterStatus(status))
        setPage(1);
    }
    const searchGender = (gender) => {
        dispatch(getCharacterGender(gender))
        setPage(1);
    }
    const searchSpecies = (species) => {
        dispatch(getCharacterSpecies(species))
        setPage(1);
    }

    return (
        <div className={style.charactersPage__container}>
            <div className={style.logo}><Logo /></div>
            <div className={style.filters}>
                <Filter name={characterName} searchByName={searchByName}/>
                <div className={style.species}><Species onChangeSpecies={searchSpecies}/></div>
                <div className={style.gender}><Gender onChangeGender={searchGender}/></div>
                <div className={style.status}><Status onChangeStatus={searchStatus}/></div>
            </div>
            <div className={`${style.moreFiltersBtn} ${moreFiltersOpen ? style.open : ""}`}>
                <button className={`${style.moreFilters} ${moreFiltersOpen ? style.open : ""}`}
                    onClick={toggleModule}>
                    ADVANCED FILTERS
                </button>
                {moreFiltersOpen ?
                    <Module toggle={toggleModule}>
                        <Species onChangeSpecies={searchSpecies} />
                        <Gender onChangeGender={searchGender} />
                        <Status onChangeStatus={searchStatus}/>
                    </Module> : ''}
            </div>
            <div className={style.characters__container}>
                {status === 'loading' && <div>Loading...</div>}
                {status === 'reject' && <div>No characters found</div>}
                {status === 'resolve' && characters && characters.length > 0 ? (
                    characters.map(c => <CharactersCard key={c.id} character={c} />)
                ) : null}
            </div>
            <div className={style.btn_showMore}><ButtonShowMore onClick={nextPage} /></div>
        </div>
    );
};

export default CharactersPage;