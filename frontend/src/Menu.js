import React from 'react'
import { NavLink } from 'react-router-dom'
import useRecipe from './hooks/useRecipe'

export default function Menu() {
  const { setCategory } = useRecipe()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <ul className="navbar-nav mr-auto p-0 d-flex justify-content-around w-100 menu">
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/all"
            onClick={() => setCategory('')}
          >
            Minden recept
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/pasta"
            onClick={() => setCategory('tészta')}
          >
            Tészták
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/cookies"
            onClick={() => setCategory('sütemény')}
          >
            Sütemények
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/breakfast"
            onClick={() => setCategory('reggeli')}
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
            onClick={() => setCategory('')}
          >
            Szezon ételek
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <NavLink
              to="/seasonfoods/springfoods"
              className="dropdown-item"
              onClick={() => setCategory('tavasz')}
            >
              Tavaszi ételek
            </NavLink>
            <NavLink
              to="/seasonfoods/summerfoods"
              className="dropdown-item"
              onClick={() => setCategory('nyár')}
            >
              Nyári ételek
            </NavLink>
            <NavLink
              to="/seasonfoods/autumnfoods"
              className="dropdown-item"
              onClick={() => setCategory('ősz')}
            >
              Őszi ételek
            </NavLink>
            <NavLink
              to="/seasonfoods/winterfoods"
              className="dropdown-item"
              onClick={() => setCategory('tél')}
            >
              Téli ételek
            </NavLink>
          </div>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/grill"
            onClick={() => setCategory('grill')}
          >
            Grill
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            className="nav-link font-weight-bold"
            activeClassName="active"
            to="/tips"
            onClick={() => setCategory('tipp')}
          >
            +Tippek
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
