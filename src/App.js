import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import About from "./About"
import Home from "./Home"
import Count from "./Counter"
import CallApi from './CallApi'
import DTB from './ReactDBT'

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Link to="/home"> Home</Link> | 
                <Link to="/about">About </Link> | 
                <Link to="/count">Counter </Link> |
                <Link to="/callapi">Callapi</Link> | 
                <Link to="/dtb">DataTable</Link>

                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/count" component={Count}></Route>
                    <Route path="/callapi/:id" component={CallApi}></Route>
                    <Route path="/dtb" component={DTB}></Route>
                    {/* <Route component={Home}></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
