import React from "react"
import {Switch, Route, Redirection} from "react-router-dom"

function Routing() {
    return(
        <div>
            <Switch>
                <Route path="reciepes/all">
                    <AllReceipes/>
                </Route>

            </Switch>
        </div>
    )
}

function AllReceipes() {
    return(
        <div>Minden recept</div>
    )
}