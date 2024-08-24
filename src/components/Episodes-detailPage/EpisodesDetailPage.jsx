import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEpisodesInfo } from '../../Redux/slices/EpisodesDetailSlice';
import style from './EpisodesDetailPage.module.css'
import CheckingStatus from '../UI/CheckingStatus/CheckingStatus';
import CharactersCard from '../UI/Cards/Characters/CharactersCard';

const EpisodesDetailPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {episode, characters, status} = useSelector((state) => state.EpisodesDetailSlice);


    useEffect(()=>{
        dispatch(fetchEpisodesInfo({id}))
    },[dispatch, id])

    if(!episode){
        return(
            <div>...Load</div>
        )
    }

    return (
        <div className={style.locationDetail__container}>
        <button>gobach</button>
        <div className={style.location__name}>{episode.name}</div>
        <div className={style.location__info}>
            <div>
                <div className={style.location__info__title}>Episode</div>
                <div className={style.location__info__item}>{episode.episode}</div>
            </div>
            <div>
                <div className={style.location__info__title}>Date</div>
                <div className={style.location__info__item}>{episode.air_date}</div>
            </div>
        </div>
        <div className={style.residents__title}>Residents</div>
        <div className={style.residents__conainer}>
            <CheckingStatus status={status} fetchData={characters}>
                {characters.map(residents => <CharactersCard key={residents.id} character={residents}/>)}    
            </CheckingStatus>
        </div>
    </div>
    );
};

export default EpisodesDetailPage;