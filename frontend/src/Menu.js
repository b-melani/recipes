import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav>
      <ul>
        <li className="nav-item border border-white p-2">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/all"
          >
            Minden recept
          </NavLink>
        </li>
        <li>
          <NavLink to="/pasta">Tészták</NavLink>
        </li>
        <li>
          <NavLink to="/cookies">Sütemények</NavLink>
        </li>
        <li>
          <NavLink to="/breakfast">Reggelik</NavLink>
        </li>
        <li>
          <NavLink to="/seasonfoods">Szezon ételek</NavLink>
        </li>
        <li>
          <NavLink to="/grill">Grill</NavLink>
        </li>
        <li>
          <NavLink to="/tips">+Tippek</NavLink>
        </li>
      </ul>
    </nav>
  )
}
