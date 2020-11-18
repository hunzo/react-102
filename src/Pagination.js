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
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li className="page-item" key={number}>
                        <a href={number} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
