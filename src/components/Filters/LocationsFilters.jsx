import React from 'react';
import Filter from '../UI/Filter/Filter'
import style from '../../components/CharactersPage/CharactersPage.module.css'
import Type from '../UI/Select/Type';
import Dimension from '../UI/Select/Dimension';


const LocationsFilters = ({locationName, updateFilter, filterWidth}) => {
    return (
        <>
            <Filter name={locationName} searchByName={(value) => updateFilter('locationName', value)} filterWidth={filterWidth}/>
            <div className={style.extrafilters}><Type searchType={(value) => updateFilter('locationType', value)}/></div>
            <div className={style.extrafilters}><Dimension searchDimension={(value) => updateFilter('locationDimension', value)}/></div>
        </>
    );
};

export default LocationsFilters;