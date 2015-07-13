// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var FavRecipe = {title: "Ghee Rice", serves: 1, ingredients: ["rice", "ghee", "cloves", "cinnamon"]}

for (key in FavRecipe) {
console.log(key + ":" + FavRecipe[key]);
}
VM7114:3 title:Ghee Rice
VM7114:3 serves:1
VM7114:3 ingredients:rice,ghee,cloves,cinnamon


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [ {name: "the cellist of Sarajevo", author: "steven galloway", alreadyRead: true} , {name: "solaris", author: "iunno", alreadyRead: false}]

for (var i = 0; i < books.length; i++) {

	if (books[i].alreadyRead === true) {
	console.log( books[i].name + " by " + books[i].author + " You done read this book")
}
	else {console.log(books[i].name + " by " + books[i].author + " You gotta read this book")}
}

the cellist of Sarajevo by steven galloway You done read this book
VM8207:9 solaris by iunno You gotta read this book

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movies = {name: "Spirited Away", duration: 100, stars: ["miyazaki", "people"]}

function imdb(movie) {
	console.log (movies.name + "lasts for " + movies.duration + "minutes. The stars are " + movies.stars);
		}
undefined
imdb(movies)
VM306:6 Spirited Awaylasts for 100minutes. The stars are miyazaki,people

var movies = {name: "Spirited Away", duration: 100, stars: ["miyazaki", "people"]}

function imdb(movie) {
	var arr = new Array();
	for (var i = 0; i < movie.stars.length ; i++) {
		
		arr.push(movie.stars[i]);
	}
	console.log (movies.name + "lasts for " + movies.duration + "minutes. The stars are " + arr)
}



