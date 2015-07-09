// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var num_of_children = 5
undefined
var partner_name = "Bob"
undefined
var geo_location = "canada"
undefined
var job_title = "programmer"
undefined
"You will be a " + job_title + "in " + geo_location + ", and married to "+partner_name+ "with " + num_of_children + "kids."

"You will be a programmerin canada, and married to Bobwith 5kids."
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
year_now = new Date().getFullYear()
2015
BirthYear = 2000
2000
year_now - BirthYear
15
BirthYear - year_now
-15

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
CurrentAge = 25
25
MaxAge = 100
100
est = 1
1
"You will need "+ (MaxAge - CurrentAge)*est + "to last you until the ripe old age of "+ MaxAge
"You will need 75to last you until the ripe old age of 100"

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

CircleRadius = 5
5
"The circumference is " +2*CircleRadius*Math.PI
"The circumference is 31.41592653589793"
"The area is " + Math.pow(CircleRadius,2)*Math.PI
"The area is 78.53981633974483"

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
celsius+" celsius is "+ (((celsius*5)/9)+32) + " degrees fahrenheit"
"54 celsius is 62 degrees fahrenheit"
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
fahrenheit+" fahrenheit is "+ ((fahrenheit*9/5)+32) + " degrees celsius"
"50 fahrenheit is 122 degrees celsius"
