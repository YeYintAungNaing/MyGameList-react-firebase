import React, { createContext, useState } from 'react'


export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

    const [searchResult, setSearchResult] = useState(null);
    const [tokenSecured, setTokenSecured] = useState(false);
    

    
    return (
        <GlobalContext.Provider
        value={{
            searchResult, 
            setSearchResult,
            tokenSecured, 
            setTokenSecured,
        }}>
            {children}
        </GlobalContext.Provider>
    )
    }
