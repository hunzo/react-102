import React from "react"

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h1>Loading ...</h1>
    }
    // console.log(posts)

    const ClickMe = () => {
        alert("hi click")
    }

    return (
        <div>
            <h1>Pagination table</h1>
            {/* { JSON.stringify(posts)}  */}
            {/* <ul>
                { posts.map( post => (
                    <li key={post.id}>{post.id},  {post.title}</li>
                ))}

            </ul> */}
            <table className="table table-sm">
                <thead className="bg-danger">
                    <tr>
                        <th className="text-white" onClick={ClickMe}>id.</th>
                        <th className="text-white" onClick={ClickMe}>Title</th>
                        <th className="text-white" onClick={ClickMe}>Body</th>
                        <th className="text-white">edit</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button className="btn btn-info">
                                    edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Posts
