import React from "react"

export default function DataTable({ data }) {
    const column = data[0] && Object.keys(data[0])
    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    {data[0] && column.map((heading) => <th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr keys={row.id}>
                        {/* {row.id} */}
                        {column.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
