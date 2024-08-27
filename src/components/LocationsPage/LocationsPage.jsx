import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/rick-and-mortyPortal.svg'
import style from './LocationsPage.module.css'
import FiltersField from '../Filters/FiltersField/FiltersField';
import LocationsFilters from '../Filters/LocationsFilters';
import AdvancedFilterModule from '../AdvancedFilterModule/AdvancedFilterModule';
import { fetchLocations } from '../../Redux/slices/LocationSlice';
import { useDispatch, useSelector } from 'react-redux';
import LocationsCard from '../UI/Cards/Locations/LocationsCard';
import ButtonShowMore from '../UI/ButtonShowMore/ButtonShowMore';
import Type from '../UI/Select/Type';
import Dimension from '../UI/Select/Dimension';
import useFilters from '../../hooks/useFilters';
import useToggle from '../../hooks/useMoreFiltersToggle';
import CheckingStatus from '../UI/CheckingStatus/CheckingStatus';


const LocationsPage = () => {

    const dispatch = useDispatch();
    const { fetchData, status } = useSelector((state) => state.LocationPageSlice);
    const { locationName, locationType, locationDimension } = useSelector((state) => state.filtersSlice);

    const { page, setPage, updateFilter } = useFilters();
    const { isOpen: moreFiltersOpen, toggle: toggleAdvancedFilters } = useToggle();

    useEffect(() => {
        dispatch(fetchLocations({ page, locationName, locationType, locationDimension }))
    }, [dispatch, page, locationName, locationType, locationDimension])


    const nextPage = () => {setPage((perv) => perv + 1)}


    return (
        <div className={style.locationsPage__container}>
            <div className={style.logo}><Logo /></div>
            <FiltersField>
                <LocationsFilters 
                placeholder={`Filter by name...`} 
                locationName={locationName} 
                updateFilter={updateFilter} 
                customWidth={'326px'}/>
            </FiltersField>

            <AdvancedFilterModule moreFiltersOpen={moreFiltersOpen} toggleModule={toggleAdvancedFilters}>
                <Type searchType={(value) => updateFilter('locationType', value)} />
                <Dimension searchDimension={(value) => updateFilter('locationDimension', value)} />
            </AdvancedFilterModule>

            <div className={style.location__container}>
                <CheckingStatus status={status} fetchData={fetchData}>
                    {fetchData.results.map(l => <LocationsCard key={l.id} locations={l} />)}
                </CheckingStatus>
            </div>
            {fetchData.info.pages === page ? null : <div className={style.btn}><ButtonShowMore onClick={nextPage}/></div>}
        </div>
    );
};

export default LocationsPage;