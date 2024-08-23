import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/RickAndMortyCharacterPage.svg'
import style from './CharactersPage.module.css'
import { fetchCharacters } from '../../Redux/slices/CharactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CharactersCard from '../UI/Cards/Characters/CharactersCard';
import ButtonShowMore from '../UI/ButtonShowMore/ButtonShowMore';
import FiltersField from '../Filters/FiltersField/FiltersField';
import AdvancedFilterModule from '../AdvancedFilterModule/AdvancedFilterModule';
import Species from '../UI/Select/Species';
import Gender from '../UI/Select/Gender';
import Status from '../UI/Select/Status';
import CharactersFilters from '../Filters/CharactersFilters';
import useFilters from '../../hooks/useFilters';
import useToggle from '../../hooks/useMoreFiltersToggle';
import CheckingStatus from '../UI/CheckingStatus/CheckingStatus';


const CharactersPage = () => {

    const dispatch = useDispatch();
    const { fetchData, status } = useSelector((state) => state.CharactersPageSlice);
    const { characterName, characterStatus, characterGender, characterSpecies } = useSelector((state) => state.filtersSlice);

    const {page, setPage, updateFilter} = useFilters();
    const { isOpen: moreFiltersOpen, toggle: toggleAdvancedFilters /*{setIsOpen}*/ } = useToggle();


    useEffect(() => {
        dispatch(fetchCharacters({ page, characterName, characterStatus, characterGender, characterSpecies }));
    }, [dispatch, page, characterName, characterStatus, characterGender, characterSpecies])


    const nextPage = () => {setPage((perv) => perv + 1)}

    return (
        <div className={style.charactersPage__container}>
            <div className={style.logo}><Logo /></div>
            <FiltersField>
                <CharactersFilters characterName={characterName} updateFilter={updateFilter}/>
            </FiltersField>

            <AdvancedFilterModule  moreFiltersOpen={moreFiltersOpen} toggleModule={toggleAdvancedFilters}>
                <Species searchSpecies={(value) => updateFilter('species', value)} />
                <Gender searchGender={(value) => updateFilter('gender', value)} />
                <Status searchStatus={(value) => updateFilter('status', value)} />
            </AdvancedFilterModule>
            
            <div className={style.characters__container}>
                <CheckingStatus status={status} fetchData={fetchData}>
                    { fetchData.results.map(c => <CharactersCard key={c.id} character={c} />)}
                </CheckingStatus>  
            </div>
            <div className={style.btn_showMore}><ButtonShowMore onClick={nextPage} /></div>
        </div>
    );
};

export default CharactersPage;