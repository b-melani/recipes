import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default function Routing() {
  return (
    <div className="col-12">
      <Switch>
        <Route exact path="/all">
          <AllReceipes />
        </Route>
        <Route exact path="/pasta">
          <Pasta />
        </Route>
        <Route path="/breakfast">
          <Breakfast />
        </Route>
        <Route path="/cookies">
          <Cookies />
        </Route>
        <Route path="/grill">
          <Grill />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
        <Route exact path="/seasonfoods/springfoods">
          <SpringFoods />
        </Route>
        <Route exact path="/seasonfoods/summerfoods">
          <SummerFoods />
        </Route>
        <Route exact path="/seasonfoods/autumnfoods">
          <AutumnFoods />
        </Route>
        <Route exact path="/seasonfoods/winterfoods">
          <WinterFoods />
        </Route>
        <Route path="/seasonfoods">
          <SeasonFoods />
        </Route>
        <Route path="/">
          <Redirect to="/all" />
        </Route>
      </Switch>
    </div>
  )
}

function AllReceipes() {
  return <div>Minden recept</div>
}

function Pasta() {
  return <div>Tészta félék</div>
}

function Breakfast() {
  return <div>Reggelik</div>
}

function Cookies() {
  return <div>Sütik</div>
}

function SeasonFoods() {
  return <div>Szezonételek</div>
}

function Grill() {
  return <div>Grill ételek</div>
}

function Tips() {
  return <div>Tippek sütéshez, főzéshez</div>
}

function AutumnFoods() {
  return <div>Őszi ételek</div>
}

function SpringFoods() {
  return <div>Tavaszi ételek</div>
}

function SummerFoods() {
  return <div>Nyári ételek</div>
}

function WinterFoods() {
  return <div>Téli ételek</div>
}
