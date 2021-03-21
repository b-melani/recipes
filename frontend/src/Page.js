import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing'
import Menu from './Menu'
import Header from './Header'
import SlideShow from './SlideShow'
import Recipes from './Recipes'

export default function Page() {
  return (
    <Router>
      <header>
        <Header />
        <div className="text-center">
          <SlideShow />
        </div>
        <div className="col-12">
          <Menu />
        </div>
      </header>
      <main>
        <Routing />
        <Recipes />
      </main>
    </Router>
  )
}
