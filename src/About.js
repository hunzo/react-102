import React from "react"
import queryString from "query-string"
import { Redirect, useLocation } from "react-router-dom"

export default function About() {
    console.log(useLocation())
    console.log(Redirect)
    const { search } = useLocation()
    const q = queryString.parse(search)

    if (q.token) {
        console.log(q)
        localStorage.setItem("token", q.token)
    } else {
        console.log("noooo")
        localStorage.clear()
    }

    console.log(q.test)
    return (
        <div>
            <h1>About</h1>
            {q.token}
        </div>
    )
}
