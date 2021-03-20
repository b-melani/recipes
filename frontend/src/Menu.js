import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-wrap">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/all"
          >
            Minden recept
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/pasta"
          >
            Tészták
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/cookies"
          >
            Sütemények
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/breakfast"
          >
            Reggelik
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/seasonfoods"
          >
            Szezon ételek
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/grill"
          >
            Grill
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/tips"
          >
            +Tippek
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
