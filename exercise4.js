// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var choices = ["green", "hitchhiker", "chocolate", "calle13", "nexus5", "jameela", "hafeez", "zenusha"]
for (var i = 0; i < choices.length; i++)
{
	var choice = i+1
		if (i == 0) { console.log ("My " + choice + "st" + "choice is " + choices[i]) }
		else if (i == 1) { console.log ("My " + choice + "nd" + "choice is " + choices[i]) }
		else if (i == 2) { console.log ("My " + choice + "rd" + "choice is " + choices[i]) }	
			else { console.log ( "My "+ choice+"th" + "choice is " + choices[i]) ;}
}

My 1stchoice is green
VM6201:7 My 2ndchoice is hitchhiker
VM6201:8 My 3rdchoice is chocolate
VM6201:9 My 4thchoice is calle13
VM6201:9 My 5thchoice is nexus5
VM6201:9 My 6thchoice is jameela
VM6201:9 My 7thchoice is hafeez
VM6201:9 My 8thchoice is zenusha
undefined