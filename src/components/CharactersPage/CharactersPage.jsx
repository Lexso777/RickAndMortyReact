import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/RickAndMortyCharacterPage.svg'
import style from './CharactersPage.module.css'
import { fetchCharacters } from '../../Redux/slices/CharactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CharactersCard from '../UI/Cards/Characters/CharactersCard';
import ButtonShowMore from '../UI/ButtonShowMore/ButtonShowMore';
import { getCharacterGender, getCharacterName, getCharacterSpecies, getCharacterStatus } from '../../Redux/slices/filtersSlice';
import FiltersField from '../Filters/FiltersField/FiltersField';
import AdvancedFilterModule from '../AdvancedFilterModule/AdvancedFilterModule';
import Species from '../UI/Select/Species';
import Gender from '../UI/Select/Gender';
import Status from '../UI/Select/Status';
import CharactersFilters from '../Filters/CharactersFilters';




const CharactersPage = () => {

    const dispatch = useDispatch();
    const { fetchData, status } = useSelector((state) => state.CharactersPageSlice);
    const { characterName, characterStatus, characterGender, characterSpecies } = useSelector((state) => state.filtersSlice);


    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        dispatch(fetchCharacters({ page, characterName, characterStatus, characterGender, characterSpecies }));
    }, [dispatch, page, characterName, characterStatus, characterGender, characterSpecies])


    const toggleAdvancedFilters = () => {
        setMoreFiltersOpen(!moreFiltersOpen)
    }

    const nextPage = () => {
        setPage((perv) => perv + 1);
    }

    const updateFilter = useCallback((filterType, value) => {
        switch (filterType) {
            case 'name':
                dispatch(getCharacterName(value));
                break;
            case 'status':
                dispatch(getCharacterStatus(value));
                break;
            case 'gender':
                dispatch(getCharacterGender(value));
                break;
            case 'species':
                dispatch(getCharacterSpecies(value));
                break;
            default:
                break;
        }
        setPage(1)
    }, [dispatch])



    return (
        <div className={style.charactersPage__container}>
            <div className={style.logo}><Logo /></div>
            <FiltersField>
                <CharactersFilters 
                    characterName={characterName} 
                    updateFilter={updateFilter} 
                />
            </FiltersField>
            <AdvancedFilterModule
                moreFiltersOpen={moreFiltersOpen}
                toggleModule={toggleAdvancedFilters}
            >
                <Species searchSpecies={(value) => updateFilter('species', value)} />
                <Gender searchGender={(value) => updateFilter('gender', value)} />
                <Status searchStatus={(value) => updateFilter('status', value)} />
            </AdvancedFilterModule>
            <div className={style.characters__container}>
                {status === 'loading' && <div>Loading...</div>}
                {status === 'reject' && <div>No characters found</div>}
                {status === 'resolve' && fetchData.results && fetchData.results.length > 0 ? (
                    fetchData.results.map(c => <CharactersCard key={c.id} character={c} />)
                ) : null}
            </div>
            <div className={style.btn_showMore}><ButtonShowMore onClick={nextPage} /></div>
        </div>
    );
};

export default CharactersPage;