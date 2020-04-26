import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
//import { render } from "@testing-library/react";
import {render} from "../index"


let flag = 0;
export default function Books(props) {
    return (

        <div className="books" id={props.title} onClick={() => turnColor(props)} >
            <h2>{props.title}</h2>
        </div>
    )
}

const turnColor = (props) => {
    const title = props.title
    const correctAns = props.correctAnswer

    console.log(title + " " + correctAns)
    
        if (props.correctAnswer !== title) {
            document.getElementById(title).style.backgroundColor = "red"
            document.getElementById(correctAns).style.backgroundColor = "green"
            flag = flag + 1;

        }
        if (props.correctAnswer === title) {
            flag = flag + 1;
            document.getElementById(title).style.backgroundColor = "green"
            
        }
       render(); 
    // } else {
    //     // document.getElementById(title).style.pointerEvents = 'none'; //to disable the multiple times click.
    //     render();
    //     document.getElementById(title).style.backgroundColor = "rgb(200, 237, 241)";
    //     document.getElementById(correctAns).style.backgroundColor = "rgb(200, 237, 241)";
    // }

}