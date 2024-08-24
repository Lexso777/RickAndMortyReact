import React from 'react';
import style from './EpisodesCard.module.css'
import { NavLink } from 'react-router-dom';

const EpisodesCard = ({ episodes }) => {
    return (
        <NavLink className={style.card__container} to={`/episodes-detail/${episodes.id}`}>
                <div className={style.episodes__info}>
                    <div className={style.episodes__name}>{episodes.name}</div>
                    <div className={style.episodes__type}>{episodes.episode}</div>
                    <div className={style.episodes__type}>{episodes.air_date}</div>
                </div>
        </NavLink>
    );
};

export default EpisodesCard;