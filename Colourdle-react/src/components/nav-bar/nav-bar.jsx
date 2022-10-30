import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
      <nav>
          <ul>
              <li>
                  <Link to='/'>Link 1</Link>
              </li>
              <li>
                  <i class="fa-solid fa-chart-column fa-lg" id="stats"></i>
              </li>
          </ul>
    </nav>
  )
}

export default NavBar