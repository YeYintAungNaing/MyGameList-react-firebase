import React from 'react'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyGameList from './pages/MyGameList'
import Profile from './pages/Profile'
import PlanToPlay from './pages/PlanToPlay'
import "./style.css"


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/myGameList' element={<MyGameList></MyGameList>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/planToPlay' element={<PlanToPlay></PlanToPlay>}></Route>
      </Routes>
    </>
  )
}

export default App