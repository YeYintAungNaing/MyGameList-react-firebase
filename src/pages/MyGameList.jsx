import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function MyGameList() {

  const {myGameList, setMyGameList} = useContext(GlobalContext);

  function changeStatus(id){
    const updatedList = myGameList.map((game) => {
      if (game.id === id) {
        // Update the age attribute for the object with id 
        return { ...game, myStatus : "Finished"};
      }
      return game; // Keep other objects unchanged
    });

    setMyGameList(updatedList);
  }


  return (
    <div>
      {
        myGameList.length > 0 ? (
          myGameList.map((game, index)=> 
          <div key={index}>
            <h3>{game.name}</h3>
            <img 
              className='resultImg'
              src={game.background_image} 
              alt={game.background_image_additional}>
            </img>
            <button onClick={() =>changeStatus(game.id)}>{game.myStatus}</button>
          </div> )
        )
        : <h2>your list is empty</h2>
      }
    </div>
  )
}
