import React from 'react';
import Filter from '../UI/Filter/Filter'

const LocationsFilters = ({locationName, updateFilter}) => {
    return (
        <>
            <Filter name={locationName} searchByName={(value) => updateFilter('name', value)}/>
        </>
    );
};

export default LocationsFilters;