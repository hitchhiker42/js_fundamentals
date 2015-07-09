// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaternum(a,b) {
if (a <b){ console.log(b); }
else {console.log(a);}};
undefined
greaternum(5,10)
VM1539:3 10
undefined
greaternum(15,2)
VM1539:4 15

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld (lang) {
if (lang == "es") { console.log("Hola Monde")}
else if (lang == "de") { console.log("hello welt")}
else { console.log("Hello world")} };
undefined
helloWorld("es")
VM2706:3 Hola Monde
helloWorld()
VM2706:5 Hello world

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(num) {
if (num > 100) {console.log ("say wut"); }	
else if (num <= 100 && num>=90) {(console.log("A")); }
else if (num <90 && num>=80) {(console.log("B")); }
else if (num <80 && num>=70) {(console.log("C")); }
else if (num <70 && num>=60) {(console.log("D")); }	
else {(console.log("F"))}
};
assignGrade(80)
VM4016:5 B
undefined
assignGrade(75)
VM4016:6 C
undefined
assignGrade(101)
VM4016:3 say wut
undefined
assignGrade(0)
VM4016:8 F
undefined
assignGrade(60)
VM4016:7 D
undefined
assignGrade(6)
VM4016:8 F
undefined
assignGrade(90)
VM4016:4 A


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
var plurals = { 'sheep': 'sheep', 'goose': 'geese', 'fish': 'fishes', 'octopus': 'octopodi'}
function pluralize (num, str) {
	if (num ==1) {
		console.log(num +" " + str);
	}
	else{
		for (key in plurals) {
			if (str == key) {
				var special = plurals[key];
			}
		}
		if (special === undefined) {
			console.log(num + " " + str + "s");
		}
		else {
		console.log(num + " " + special);
		}
	}
}
pluralize(1,'goose')
VM6072:5 1 goose
undefined
pluralize(5,'goose')
VM6072:17 5 geese
undefined
pluralize(5,'octocpus')
VM6072:14 5 octocpuss
undefined
pluralize(5,'octopus')
VM6072:17 5 octopodi
undefined
pluralize(1,'octopus')
VM6072:5 1 octopus
undefined
pluralize(1,'god')
VM6072:5 1 god
undefined
pluralize(2,'god')
VM6072:14 2 gods