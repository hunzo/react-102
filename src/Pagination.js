import React from "react"

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    // console.log("pagination ", postPerPage, totalPosts)
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        // console.log(i)
        pageNumbers.push(i)
    }
    // console.log(pageNumbers)
    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                {pageNumbers.map((number) => (
                    <li className="page-item" key={number}>
                        <a href="/callapi/#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
