import { useState } from 'react';

const useMoreFiltersToggle = (initialState = false) => {

    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = () => {
        setIsOpen(perv => !perv)
    };

    return {isOpen, toggle, setIsOpen}
};

export default useMoreFiltersToggle;