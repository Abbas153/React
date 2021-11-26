import React from "react"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                item={item}
                />
        )
    })
    return (
        <div>
            {cards}
        </div>
    )
}