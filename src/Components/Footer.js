import React from "react"
import  'bootstrap/dist/css/bootstrap.css'
import "../css/Footer.css"

export default function Footer(){
    return(
        <div id="footer" className="row">
            <div className="col-12">
                <p className="texted-muted credit">All images are taken from 
                 <a href="https://commons.wikimedia.org/wiki/Main_Page"> WikiMedia</a></p>
            </div>
        </div>
    )
}