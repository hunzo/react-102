import React, { useState, useEffect } from "react"
import axios from "axios"
import Pagination from './Pagination'
import Posts from './Posts'
// import { useParams } from 'react-router-dom'

export default function CallApi(match) {

    console.log(match.match.params)
    console.log(match.match.params.id)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

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
        <div>
            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>

            <Posts posts={currentPost} loading={loading} />

        </div>
    )
}
