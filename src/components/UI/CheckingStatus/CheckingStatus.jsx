import React from 'react';

const CheckingStatus = ({status, fetchData, children}) => {
    if(status === 'loading'){
        return <div>Loading...</div>
    }
    if(status === 'reject'){
        return <div>No found</div>
    }
    if(status === 'resolve' && fetchData.results && fetchData.results.length > 0){
        return children
    }

    return null;
};

export default CheckingStatus;