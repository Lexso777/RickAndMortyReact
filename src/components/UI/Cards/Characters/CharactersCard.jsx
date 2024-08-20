import React from 'react';
import style from './CharactersCard.module.css'
import { NavLink } from 'react-router-dom';

const CharactersCard = ({ character }) => {

    return (
        <NavLink to={`/characters-detail/${character.id}`}>
            <div className={style.card__container}>
                <img src={character.image} alt="@" />
                <div className={style.character__info}>
                    <div className={style.name}>{character.name}</div>
                    <div className={style.species}>{character.species}</div>
                </div>
            </div>
        </NavLink>
    );
};

export default CharactersCard;