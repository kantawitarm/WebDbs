import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home"

import Test from "../pages/Test/Test"
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/test">
                    <Test />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
