import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Home() {

    const {searchResult, setSearchResult, myGameList, setMyGameList, filteredList, setFilteredList} = useContext(GlobalContext);
    const [serachKey, setSearchKey] = useState('');


    async function  fetchGames() {
        const url = `https://api.rawg.io/api/games/${serachKey}?key=a8654ed4ff48421f9db2d19759317740`

        try {
            const response = await fetch(url);
            const data =  await response.json();
            console.log(data);
            const game = {
                name : data.name,
                slug : data.slug,
                id : data.id,
                description : data.description,
                released : data.released,
                rating : data.rating,
                website : data.website,
                background_image : data.background_image,
                background_image_additional : data.background_image_additional,
                myStatus : "pending"
            }
            setSearchResult(game)   
        }

        catch (error) {
        console.error('Error fetching platforms:', error);
        }
    }


    function handleSearch(event) {          // when the user search the game
        event.preventDefault()
        //console.log(serachKey)
        if (serachKey !== ""){
        fetchGames() 
        } 
        else{
            window.alert("Search bar is empty")
        }  
    }

    function addToList() {             // when the user click add to list button
        if (searchResult){
            setMyGameList([...myGameList, searchResult])
            console.log('added')
        }
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
                        <button onClick={addToList}>Add to MyGameList</button>
                    </div>
                )
                :null
            }
        </>
    )
}
