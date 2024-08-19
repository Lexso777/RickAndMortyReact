import React from 'react';
import style from './CharactersCard.module.css'

const CharactersCard = ({ character }) => {

    return (
        <div className={style.card__container}>
                <img src={character.image} alt="@" />
                <div className={style.character__info}>
                    <div className={style.name}>{character.name}</div>
                    <div className={style.species}>{character.species}</div>
                </div>
        </div>
    );
};

export default CharactersCard;