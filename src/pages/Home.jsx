import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Home() {

    const {searchResult, setSearchResult} = useContext(GlobalContext);
    const [serachKey, setSearchKey] = useState('');


    async function  fetchGames() {
        const url = `https://api.rawg.io/api/games/${serachKey}?key=a8654ed4ff48421f9db2d19759317740`

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setSearchResult(data)
           
          } catch (error) {
            console.error('Error fetching platforms:', error);
          }
        }


    function handleSearch(event){
        event.preventDefault()
        //console.log(serachKey)
        fetchGames()    
    }
    

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                placeholder='Search your game'
                value={serachKey}
                onChange={(event)=> setSearchKey(event.target.value) }>
                </input>
                <button onClick={handleSearch}>Search</button>
            </form>
            {
                searchResult ? (
                    <div>
                        <h1>{searchResult.name}</h1>
                        <img 
                        className='resultImg'
                        src={searchResult.background_image} 
                        alt={searchResult.background_image_additional}></img>
                    </div>
                )
                :null
            }
        </>
    )
}
