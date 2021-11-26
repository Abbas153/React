import React from "react"

export default function Card(props) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.descripton}</p>
        </div>
    )
}