import { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const GlobalState = (props) => {
    const [currentUser, setCurrentUser] = useState('');

    const states = { currentUser };
    const setters = { setCurrentUser };

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;