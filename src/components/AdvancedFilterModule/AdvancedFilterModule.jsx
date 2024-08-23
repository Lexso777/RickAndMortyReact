import React from 'react';
import style from './AdvancedFilterModule.module.css'
import Module from '../UI/Module/Module';



const AdvancedFilterModule = React.memo(({
    moreFiltersOpen,
    toggleModule,
    children
}) => {

    return (
        <div className={`${style.moreFiltersBtn} ${moreFiltersOpen ? style.open : ""}`}>
            <button className={`${style.moreFilters} ${moreFiltersOpen ? style.open : ""}`}
                onClick={toggleModule}>
                ADVANCED FILTERS
            </button>
            {moreFiltersOpen ?
                <Module toggle={toggleModule}>
                    {children}
                </Module> : ''}
        </div>
    );
});

export default AdvancedFilterModule;