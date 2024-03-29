import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import { apiKey } from '../api/API';
import CircleScore from '../component/CircleScore';


export default function GameDetail() {

    const [detailPageLoaded, setDetailPageLoaded] = useState(false)
    const [gameDetail, setGameDetail] = useState(null);

    const {id} = useParams()

    useEffect(()=>{
        async function getGamedetails(){
            try{
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
                const data = await response.json();
                console.log(data) 
             
                
                if (data) {
                    setGameDetail(data)
                    setDetailPageLoaded(true)
                }
            }
            
            catch(error){
                console.log(error)
            }
        }
        
        if (!detailPageLoaded){
            getGamedetails();
        }
    },[detailPageLoaded])  
    
    
    return (
        <div>
            {
              gameDetail ? (
                <div>
                    <h2>{gameDetail.name}</h2>
                    <img 
                        className='resultImg'
                        src={gameDetail.background_image} 
                        alt={gameDetail.background_image_additional}>
                    </img>
                    <h3>{gameDetail.released}</h3>
                    <p>{gameDetail.description_raw}</p>
                    <CircleScore score={gameDetail.metacritic}></CircleScore>
                </div>
              )
                : <h2>Loading.....Pls wait</h2> 
            }
        </div>
    )
    }
