import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/myGameList">MyGameList</Link>
        </li>
        <li>
            <Link to="/planToPlay">PlanToPlay</Link>
        </li>
    </ul>
  )
}
