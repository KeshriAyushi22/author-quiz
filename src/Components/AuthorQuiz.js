import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "../Components/Header"
import MainPage from "../Components/MainPage"
import NextPage from "../Components/NextPage"
import Footer from "../Components/Footer"
import { dataList } from "../data/AuthorData"
import { shuffle ,sample} from "underscore"


export default class AuthorQuiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      turnData: getMainPageData(dataList.authorList)
    }
  }

  render() {
    const {turnData}=this.state;
    return (
      <div className="container-fluid">
        <Header />
        <MainPage author={turnData.author} books={turnData.books} />
        <NextPage />
        <Footer />

      </div>
    )
  }
}

function getMainPageData(authors) {
  /*
    Take all the books of author, concatanate it and select top 4 books.
    Here, authors array list is iterated and each value of its books are concat to the new Array
  */
  const allBooks = authors.reduce((newArray, author, index) => {
    return newArray.concat(author.books);
  }, []);

  /* Now shuffle this new Array of all the books of authors. by using 3rd party and select 4 books.*/
  
  const fourRandomBooks= shuffle(allBooks).slice(0,4);

  /*Select any random value and with that value select the picture for correct answer*/
  console.log(sample(fourRandomBooks))
    const correctAnswer=sample(fourRandomBooks)

   /*To find the author of the book we need to use find function and then use some method to get the matching data.*/ 
 
  return{
    books:fourRandomBooks,
    author: authors.find(author=>
      author.books.some((title)=>
                     title===correctAnswer)
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


