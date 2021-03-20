import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing'
import Menu from './Menu'
import Header from './Header'
import SlideShow from './SlideShow'

export default function Page() {
  return (
    <Router>
      <header>
        <Header />
        <div>
          <SlideShow />
        </div>
        <div className="col-12">
          <Menu />
        </div>
      </header>
      <main>
        <Routing />
      </main>
    </Router>
  )
}
