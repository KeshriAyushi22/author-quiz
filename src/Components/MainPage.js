import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "../css/MainPage.css"
import Book from "../Components/Book"


export default function MainPage({author,books,correctAnswer}) {

const validateAnswer=(e)=>{
     console.log(correctAnswer);
    // console.log(e.target.name)
    // console.log(e)
}


    return (
        //here giving two class name one bootstrp row and other turn for custom css
        //Key must be send to identify the book as unique
        <div className="row turn" style={{ backgroundColor: "white", height: "500px" }}>
            <div className="col-4 offset-1" style={{ backgroundColor: "white", height: "500px" }}>
                <img src={author.imgUrl} alt="author-image" className="authImage" />
            </div>

            <div className="col-6 offset-1 list" style={{ backgroundColor: "white", height: "500px" }} >
                {books.map(element => <Book title={element} key={element} correctAnswer={correctAnswer}/>)}
            </div>

        </div>
    )
}