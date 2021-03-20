import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from "./Routing"
import Menu from "./Menu"
import Header from "./Header"

export default function Page() {
    return(
        <Router>
            <Routing/>
            <header>
            <Header/>
            <Menu/>
            </header>
        </Router>
    )
}