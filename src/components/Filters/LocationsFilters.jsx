import React from 'react';
import Filter from '../UI/Filter/Filter'
import style from '../../components/CharactersPage/CharactersPage.module.css'
import Type from '../UI/Select/Type';
import Dimension from '../UI/Select/Dimension';


const LocationsFilters = ({locationName, updateFilter, placeholder, customWidth}) => {
    return (
        <>
            <Filter customWidth={customWidth} name={locationName} placeholder={placeholder} searchByName={(value) => updateFilter('locationName', value)}/>
            <div className={style.extrafilters}><Type searchType={(value) => updateFilter('locationType', value)}/></div>
            <div className={style.extrafilters}><Dimension searchDimension={(value) => updateFilter('locationDimension', value)}/></div>
        </>
    );
};

export default LocationsFilters;