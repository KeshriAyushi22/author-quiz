import React, { Component } from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import Header from "../Components/Header"
import MainPage from "../Components/MainPage"
import NextPage from "../Components/NextPage"
import Footer from "../Components/Footer"


export default class AuthorQuiz extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <MainPage {...this.props}/>
        <NextPage/>
        <Footer/>
    
      </div>
    )
  }
}

/*--For learning jsx, js difference--*/

// const AuthorQuiz=()=>{

//   return(
// <h1>
//   <Sum a={3} b={4}/>
// </h1>
//   )
// }
// export default AuthorQuiz;


