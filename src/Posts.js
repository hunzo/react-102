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

            <table className="table table-sm">
                <thead className="bg-danger">
                    <tr>
                        <th className="text-white" onClick={ClickMe}>Index</th>
                        <th className="text-white" onClick={ClickMe}>UserID.</th>
                        <th className="text-white" onClick={ClickMe}>Title</th>
                        <th className="text-white" onClick={ClickMe}>Body</th>
                        <th className="text-white">edit</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
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
