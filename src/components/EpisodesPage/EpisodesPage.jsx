import React, { useEffect } from 'react';
import style from './EpisodesPage.module.css'
import {ReactComponent as Logo} from '../../assets/svg/rick-and-mortyLogoEpisodes.svg'
import FiltersField from '../Filters/FiltersField/FiltersField';
import Filter from '../UI/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../Redux/slices/EpisodesSlice';
import EpisodesCard from '../UI/Cards/Episodes/EpisodesCard';
import ButtonShowMore from '../UI/ButtonShowMore/ButtonShowMore';
import useFilters from '../../hooks/useFilters';
import CheckingStatus from '../UI/CheckingStatus/CheckingStatus';

const EpisodesPage = () => {

    const dispatch = useDispatch();
    const { fetchData, status } = useSelector((state) => state.EpisodesPageSlice);

    const { episodesName } = useSelector((state) => state.filtersSlice)

    const { page, setPage, updateFilter } = useFilters();
    const nextPage = () => {setPage((perv) => perv + 1)}

    useEffect(()=>{
        dispatch(fetchEpisodes({page, episodesName}));
        
    },[dispatch, page, episodesName])

    return (
        <div className={style.episodePage__container}>
            <div className={style.logo}>< Logo /></div>
            <FiltersField>
                <Filter customWidth={'500px'} placeholder={`Filter by name or episode (ex. S01 or S01E02)`}  name={episodesName} searchByName={(value) => updateFilter('episodesName', value)} />      
            </FiltersField>
            <div className={style.episodes__container}>
                <CheckingStatus status={status} fetchData={fetchData}>
                {fetchData.results.map(episodes => <EpisodesCard key={episodes.id} episodes={episodes}/>)}
                </CheckingStatus>
            </div>
            {fetchData.info.pages === page ? null : <div className={style.btn}><ButtonShowMore onClick={nextPage}/></div>}
        </div>
    );
};

export default EpisodesPage;