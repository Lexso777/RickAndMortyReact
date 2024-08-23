import React from 'react';
import style from './FiltersField.module.css'


const FiltersField = React.memo(({
    children
}) => {
    return (
        <div className={style.filters}>
                {children}
        </div>
    );
});

export default FiltersField;