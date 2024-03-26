import React, { createContext, useState } from 'react'


export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

    const [searchResult, setSearchResult] = useState(null);   // user search result
    const [myGameList, setMyGameList] = useState([])          // user myGameList
    const [filteredList, setFilteredList] = useState([])      // list of games filterd by some sort of parameter( rating, pupularity ...)
    
    
    return (
        <GlobalContext.Provider
          value={{
              searchResult, 
              setSearchResult,
              myGameList, 
              setMyGameList, 
              filteredList, 
              setFilteredList
          }}>
              {children}
        </GlobalContext.Provider>
    )
    }
