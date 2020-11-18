import React from "react"

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h1>Loading ...</h1>
    }
    // console.log(posts)

    return (
        <div>
            <h1>TEST</h1>
            {/* { JSON.stringify(posts)}  */}
            {/* <ul>
                { posts.map( post => (
                    <li key={post.id}>{post.id},  {post.title}</li>
                ))}

            </ul> */}
            <table className="table table-sm">
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Posts
