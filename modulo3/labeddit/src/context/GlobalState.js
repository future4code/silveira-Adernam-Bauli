import React, { useState } from "react";
import GlobalStateContext from './GlobalStateContext';


const GlobalState = (props) => {
    const [currentPost, setCurrentPost] = useState({});
    const [currentPage, setCurrentPage] = useState("");
    

    const states = { currentPost, currentPage }
    const setters = { setCurrentPost, setCurrentPage }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;