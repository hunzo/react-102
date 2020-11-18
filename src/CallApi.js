import React, { useState, useEffect } from "react"
import axios from "axios"
import Pagination from './Pagination'
import Posts from './Posts'
import './CallApi'
// import { useParams } from 'react-router-dom'

export default function CallApi() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    // const [postPerPage, setPostPerPage] = useState(10)
    const [postPerPage] = useState(10)

    const [q, setQ] = useState("")

    const search = (rows) => {
        const columns = rows[0] && Object.keys(rows[0])

        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q) > -1
            ))
        // String(row.id).toLowerCase().indexOf(q) > -1 ||
        // row.title.toLowerCase().indexOf(q) > -1 ||
        // row.body.toLowerCase().indexOf(q) > -1  

    }



    useEffect(() => {

        const fetchPosts = async () => {
            console.log("Fetch data ...")
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const filterPosts = search(posts)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    // const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
    const currentPost = filterPosts.slice(indexOfFirstPost, indexOfLastPost)

    
    // console.log(filterPosts)



    return (
        <div className="call">
            {/* #debug{ JSON.stringify(q)} */}
            <label htmlFor="input" className="mt-2 mr-2" >Search </label>
            <input className="input" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            {/* <Posts posts={currentPost} loading={loading} /> */}
            <Posts posts={currentPost} loading={loading} />

            {/* <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} /> */}
            <Pagination postPerPage={postPerPage} totalPosts={filterPosts.length} paginate={paginate} />
 


        </div>
    )
}
