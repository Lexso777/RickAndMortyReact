import React from 'react';
import style from './LocationsCard.module.css'
import { NavLink } from 'react-router-dom';

const LocationsCard = ({ locations }) => {
    return (
        <NavLink className={style.card__container} to={`/locations-detail/${locations.id}`}>
                <div className={style.location__info}>
                    <div className={style.location__name}>{locations.name}</div>
                    <div className={style.location__type}>{locations.type}</div>
                </div>
        </NavLink>
    );
};

export default LocationsCard;