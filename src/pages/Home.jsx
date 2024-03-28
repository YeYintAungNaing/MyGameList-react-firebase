import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { apiKey } from '../api/API';
import { Link } from 'react-router-dom';


export default function Home() {

    const {searchResult, setSearchResult, myGameList, setMyGameList, filteredList, setFilteredList} = useContext(GlobalContext);
    const [serachKey, setSearchKey] = useState('');
    

    async function  fetchSearchedGame() {
        const url = `https://api.rawg.io/api/games/${serachKey}?key=${apiKey}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            
            
            //console.log(data);
            const  game =  {
                name : data.name,
                slug : data.slug,
                id : data.id,
                description : data.description,
                released : data.released,
                metacritic : data.metacretic,
                website : data.website,
                background_image : data.background_image,
                background_image_additional : data.background_image_additional,
                myStatus : "pending"
            }
            
            setSearchResult(game)
            //console.log(searchResult)   
        }

        catch (error) {
        console.log( error);
        }
    }
    


    async function fetchFilteredGames(event){
        event.preventDefault()
        const url2 = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-metacritic&page_size=20`
        
        try{
            const response = await fetch(url2);
            const data = await response.json();
            //console.log(data.results)
            setFilteredList(data.results)
        }
        catch(error){
            console.log(error)
        }
    }


    function handleSearch(event) {          // when the user search the game
        event.preventDefault()
        //console.log(serachKey)
        if (serachKey !== ""){
            fetchSearchedGame() 
        } 
        else{
            window.alert("Search bar is empty")
        }  
    }


    function clearResult(event) {
        event.preventDefault()
        setSearchKey("");
        setSearchResult(null);
    }

    function addToList(event, item) { // when the user click add to list button
        event.preventDefault()
        setMyGameList([...myGameList, item])  
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
                <br/>
                <button onClick={clearResult}>Clear results</button>
            </form>
            {
                searchResult ? (
                    <div>
                        <Link to={`/${searchResult.id}`}>{searchResult.name}</Link>
                        <img 
                        className='resultImg'
                        src={searchResult.background_image} 
                        alt={searchResult.background_image_additional}></img>
                        <button onClick={(event)=>addToList(event, searchResult)}>Add to MyGameList</button>    
                    </div>
                )
                :
                <div>
                    <button onClick={fetchFilteredGames}>most popular</button>
                    {
                        filteredList && filteredList.map((game, index)=> (
                            <div key={index}>
                            <Link to={`/${game.id}`}>{game.name}</Link>
                            <img 
                                className='resultImg'
                                src={game.background_image} 
                                alt='bruh'>    
                            </img>
                            <button onClick={(event)=>addToList(event, game)}>Add to MyGameList</button>
                            </div> 
                        ) )
                    }
                </div>
            }
        </>
    )
}
