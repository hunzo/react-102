import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import About from "./About"
import Home from "./Home"
import Count from "./Counter"
import CallApi from './CallApi'
import DTB from './ReactDBT'

export default function App() {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)

    const hResize = () => {
        setW(window.innerWidth)
        setH(window.innerHeight)

    }

    useEffect(() => {
        window.addEventListener('resize', hResize)
        return () => {
            window.removeEventListener('resize', hResize)
        }
    }, [])

    return (

        <div className="container">
            <div>
                {w} x {h}
            </div>
            <BrowserRouter>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="text-white"> Home</Link>
                            <Link to="/About" className="text-white"> About</Link>
                            <Link to="/callapi" className="text-white"> callapi</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/about" className="text-white">About</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/count" className="text-white">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/callapi" className="text-white">CallAPIs</Link>
                        </li> */}

                    </ul>
                    {/*                         
                    <Link to="/home"> Home</Link>
                    <Link to="/about">About </Link>
                    <Link to="/count">Counter </Link>
                    <Link to="/callapi">Callapi</Link>
                    <Link to="/dtb">DataTable</Link> */}

                </nav>


                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/count" component={Count}></Route>
                    <Route path="/callapi" component={CallApi}></Route>
                    <Route path="/dtb" component={DTB}></Route>
                    {/* <Route component={Home}></Route> */}
                </Switch>
            </BrowserRouter>

        </div>

    )
}
