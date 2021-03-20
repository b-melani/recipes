import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <ul className="navbar-nav mr-auto p-0 d-flex justify-content-around w-100 menu">
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

        <li className="nav-item dropdown show active ">
          <NavLink
            className="nav-link dropdown-toggle font-weight-bold show"
            id="myDropdown"
            data-toggle="dropdown"
            activeClassName="active"
            to="/seasonfoods"
          >
            Szezon ételek
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <NavLink to="/seasonfoods/springfoods" className="dropdown-item">
              Tavaszi ételek
            </NavLink>
            <NavLink to="/seasonfoods/summerfoods" className="dropdown-item">
              Nyári ételek
            </NavLink>
            <NavLink to="/seasonfoods/autumnfoods" className="dropdown-item">
              Őszi ételek
            </NavLink>
            <NavLink to="/seasonfoods/winterfoods" className="dropdown-item">
              Téli ételek
            </NavLink>
          </div>
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
