import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/receipes/all">
                        Minden recept
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}