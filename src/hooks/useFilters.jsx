import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    getCharacterGender,
    getCharacterName,
    getCharacterSpecies,
    getCharacterStatus,
    getLocationDimension,
    getLocationName,
    getLocationType
} from '../Redux/slices/filtersSlice';


export const useFilters = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);


    const updateFilter = useCallback((filterType, value) => {
        switch (filterType) {
            case 'name':
                dispatch(getCharacterName(value));
                break;
            case 'status':
                dispatch(getCharacterStatus(value));
                break;
            case 'gender':
                dispatch(getCharacterGender(value));
                break;
            case 'species':
                dispatch(getCharacterSpecies(value));
                break;
            case 'locationName':
                dispatch(getLocationName(value));
                break;
            case 'locationType':
                dispatch(getLocationType(value));
                break;
            case 'locationDimension':
                dispatch(getLocationDimension(value));
                break;
            default:
                break;
        }
        setPage(1)
    }, [dispatch])


    return {
        page,
        setPage,
        updateFilter
    }
};

export default useFilters;