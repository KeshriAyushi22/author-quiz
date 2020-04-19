import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import "../css/Header.css"

export default function Header(){
    return(<div className="row">
        <div className="jumbotron col-10 offset-1">
            <h2>Author Quiz</h2>
            <p>Select the book written by the author</p>
        </div>
    </div>)
}
