import React, { useEffect, useState } from "react"
import queryString from "query-string"
import { useLocation } from "react-router-dom"
import "./Counter.css"

export default function Counter() {
    const { search } = useLocation()
    const q = queryString.parse(search)

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
        console.log("increment counter ", count)
    }

    const Decreament = () => {
        setCount(count - 1)
        console.log("decrement counter ", count)
    }

    useEffect(() => {
        
        if (q.show) {
            setCount(parseInt(q.show))
            console.log("show counter -> ", q.show)
        }
    }, [q.show])

    return (
        <div>
            <div className="container">
                
                <button className="btn btn-primary" onClick={Increment} style={{marginRight: "1rem"}}>Inc</button>
                <button className="btn btn-info" onClick={Decreament}>Dec</button>
                <p>{count}</p>
            </div>
        </div>
    )
}
