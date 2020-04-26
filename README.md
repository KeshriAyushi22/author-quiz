# author-quiz
React quiz app with css

#third party lib used:
1) bootstrap - for row , container to make it adjust every screen width 
2) underscore - for selecting the random number of books using shuffle function, reducing it to 4 numbers to display 
                and then selecting a correct value of the book from the list and selecting the corresponding image of the author.

#  Reduce->The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).

-----------------------------------------------------------------
Main Functionality:


# Take all the books of author, concatanate it and select top 4 books.
# Here, authors array list is iterated and each value of its books are concat to the new Array

  const allBooks = authors.reduce((newArray, author, index) => {
    return newArray.concat(author.books);
  }, []);

# Now shuffle this new Array of all the books of authors. by using 3rd party and select 4 books.*/
  
  const fourRandomBooks= shuffle(allBooks).slice(0,4);

# Select any random value and with that value select the picture for correct answer*/
  console.log(sample(fourRandomBooks))
    const correctAnswer=sample(fourRandomBooks)

 # To find the author of the book we need to use find function and then use some method to get the matching data.*/ 
 authors.find(author=>
      author.books.some((title)=>
                     title===correctAnswer)

 # FORMS: 
form libraries: react json schema form