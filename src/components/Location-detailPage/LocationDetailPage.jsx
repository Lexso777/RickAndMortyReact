import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchLocationInfo } from '../../Redux/slices/LocationDetailSlice';
import style from './LocationDetailPage.module.css'
import CharactersCard from '../UI/Cards/Characters/CharactersCard'
import CheckingStatus from '../UI/CheckingStatus/CheckingStatus'

const LocationDetailPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const { location, residents, status } = useSelector((state) => state.LocationDetailSlice)
    
    useEffect(()=>{
        dispatch(fetchLocationInfo({id}))
    },[dispatch, id])


    if(!location){
        return <div>...Load</div>
    }

    return (
        <div className={style.locationDetail__container}>
            <button>gobach</button>
            <div className={style.location__name}>{location.name}</div>
            <div className={style.location__info}>
                <div>
                    <div className={style.location__info__title}>Type</div>
                    <div className={style.location__info__item}>{location.type}</div>
                </div>
                <div>
                    <div className={style.location__info__title}>Dimension</div>
                    <div className={style.location__info__item}>{location.dimension}</div>
                </div>
            </div>
            <div className={style.residents__title}>Residents</div>
            <div className={style.residents__conainer}>
                <CheckingStatus status={status} fetchData={residents}>
                    {residents.map(residents => <CharactersCard key={residents.id} character={residents}/>)}    
                </CheckingStatus>
            </div>
        </div>
    )
};

export default LocationDetailPage;