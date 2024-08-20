import React from 'react';
import style from './AdvancedFilterModule.module.css'
import Module from '../UI/Module/Module';
import Species from '../UI/Select/Species';
import Gender from '../UI/Select/Gender';
import Status from '../UI/Select/Status';


const AdvancedFilterModule = React.memo(({
    moreFiltersOpen,
    toggleModule,
    searchSpecies,
    searchGender,
    searchStatus
}) => {

    return (
        <div className={`${style.moreFiltersBtn} ${moreFiltersOpen ? style.open : ""}`}>
            <button className={`${style.moreFilters} ${moreFiltersOpen ? style.open : ""}`}
                onClick={toggleModule}>
                ADVANCED FILTERS
            </button>
            {moreFiltersOpen ?
                <Module toggle={toggleModule}>
                    <Species onChangeSpecies={searchSpecies} />
                    <Gender onChangeGender={searchGender} />
                    <Status onChangeStatus={searchStatus} />
                </Module> : ''}
        </div>
    );
});

export default AdvancedFilterModule;