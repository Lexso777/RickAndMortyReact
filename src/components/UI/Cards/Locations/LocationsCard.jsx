import React from 'react';
import style from './LocationsCard.module.css'

const LocationsCard = ({ locations }) => {
    return (
        <div className={style.card__container}>
            <div className={style.location__info}>
                <div className={style.location__name}>{locations.name}</div>
                <div className={style.location__type}>{locations.type}</div>
            </div>
        </div>
    );
};

export default LocationsCard;