import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default function Books(props) {
    return (
        <div className="books">
            <h2>{props.title}</h2>
        </div>
    )
}