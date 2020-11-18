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

    // console.log("post", posts)
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
    // console.log("current post",currentPost, posts.length)

    return (
        <div className="call">
            <Posts posts={currentPost} loading={loading} />

            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />

            {/* <Posts posts={currentPost} loading={loading} /> */}

        </div>
    )
}
