import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';



export default function MyGameList() {

  
  const {myGameList, setMyGameList} = useContext(GlobalContext);

  function changeStatus(id){
    const updatedList = myGameList.map((game) => {
      if (game.id === id) {
        // Update the age attribute for the object with id 
        return { ...game, myStatus : "finished"};
      }
      return game; // Keep other objects unchanged
    });

    setMyGameList(updatedList);
  }


  const handleStatusChange = (event) => {
    //console.log(event.target.value);
  }

  return (
    <div>
      {
        myGameList.length > 0 ? (
          myGameList.map((game, index)=> 
          <div key={index}>
            <Link to={`/${game.id}`}>{game.name}</Link>
            <img 
              className='resultImg'
              src={game.background_image} 
              alt={game.background_image_additional}>
            </img>
            <button onClick={() =>changeStatus(game.id)}>{game.myStatus}</button>
            <select
            value={game.myStatus}
            onChange={() =>changeStatus(game.id)}>
              <option value='pending'>pending</option>
              <option value='Finished'>Finished</option>
              <option value='PlanToPlay'>PlanToPlay</option>
            </select>
          </div> )
        )
        : <h2>your list is empty</h2>
      }
    </div>
  )

}
