import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "../css/MainPage.css"
import Book from "../Components/Book"


export default function MainPage(props) {
    return (
        //here givining two class name oe bootstrp row and other turn for custom css
        //Key must be send to identify the book as unique
        <div className="row turn" style={{ backgroundColor: "white", height: "500px" }}>
            <div className="col-4 offset-1" style={{ backgroundColor: "white", height: "500px" }}>
                <img src={props.dataList.authorList[0].imgUrl} alt="author-image" className="authImage" />
            </div>

            <div className="col-6 offset-1 list" style={{ backgroundColor: "white", height: "500px" }}>
                {props.dataList.authorList[0].books.map(element => <Book title={element} key={element} />)}
            </div>

        </div>
    )
}