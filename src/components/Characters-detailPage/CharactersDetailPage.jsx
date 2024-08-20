import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterInfo } from '../../Redux/slices/CharacterDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './CharactersDetailPage.module.css'
import { ReactComponent as ArrowRight } from '../../assets/svg/chevron_right_24px.svg'

const CharactersDetailPage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { character, episodes, locationId, status } = useSelector((state) => state.CharacterDetailSlice);



    useEffect(() => {
        dispatch(fetchCharacterInfo({ id }));
    }, [dispatch, id])


    if (!character) {
        return <div>Loading...</div>;
    }

    const characterDetails = [
        { label: 'Gender', value: character.gender || 'Unknown' },
        { label: 'Status', value: character.status || 'Unknown' },
        { label: 'Specie', value: character.species || 'Unknown' },
        { label: 'Origin', value: character.origin.name || 'Unknown' },
        { label: 'Type', value: character.type || 'Unknown' },
    ];


    return (
        <>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'reject' && <div>No characters found</div>}
            {status === 'resolve' && characterDetails.length !== 0 &&
                <div className={style.charactersDetail}>
                    <button>goback</button>
                    <div className={style.charactersInfo}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </div>
                    <div className={style.generalInformation__container}>
                        <div className={style.Informations}>
                            <div className={style.title}>Informations</div>
                            <ul className={style.ul}>
                                {characterDetails.map((detail, index) =>
                                    <li className={style.li} key={index}>
                                        <div className={style.li_label}>{detail.label}</div>
                                        <div className={style.li_value}>{detail.value}</div>
                                        <div className={style.li_border}></div>
                                    </li>
                                )}
                                <li className={style.li}>
                                    <div className={style.li_label}>Location</div>
                                    <div className={style.li_value}>{character.location.name}</div>
                                    <div className={style.arrow__right}><ArrowRight /></div>
                                    <div className={style.li_border}></div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.Episodes}>
                            <div className={style.title}>Episodes</div>
                            <ul className={style.ul}>
                                {episodes.map((e) =>
                                    <li className={style.li} key={e.id}>
                                        <div className={style.li_label}>{e.episode}</div>
                                        <div className={style.li_value}>{e.name}</div>
                                        <div className={style.li_value}>{e.air_date}</div>
                                        <div className={style.arrow__right}><ArrowRight /></div>
                                        <div className={style.li_border}></div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CharactersDetailPage;