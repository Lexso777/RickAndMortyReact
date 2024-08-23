import React, { useState } from 'react';
import {ReactComponent as Logo} from '../../assets/svg/rick-and-mortyPortal.svg'
import style from './LocationsPage.module.css'
import FiltersField from '../Filters/FiltersField/FiltersField';
import LocationsFilters from '../Filters/LocationsFilters';
import AdvancedFilterModule from '../AdvancedFilterModule/AdvancedFilterModule';
import Status from '../UI/Select/Status';
import Gender from '../UI/Select/Gender';

const LocationsPage = () => {

    const searchByName = ''


    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);


    const toggleAdvancedFilters = () => {
        setMoreFiltersOpen(!moreFiltersOpen)
    }

    return (
        <div className={style.locationsPage__container}>
            <div className={style.logo}><Logo/></div>
            <FiltersField>
                <LocationsFilters                    
                    locationName={searchByName} 
                />
            </FiltersField>
            <AdvancedFilterModule
                moreFiltersOpen={moreFiltersOpen}
                toggleModule={toggleAdvancedFilters}
            >
                <Status/>
                <Gender/>
            </AdvancedFilterModule>
            <div className={style.location__container}>
                    
            </div>
        </div>
    );
};

export default LocationsPage;