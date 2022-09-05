// a. Q&A

// How do we assign a value to a variable?

// var1 = ('value');

// // How do we change the value of a variable?

// var1 = (' new variable');

// // How do we assign an existing variable to a new variable?

// var2 = var1;

// Remind me, what are declare, assign, and define?

// a. to declare is to introduce for the first time into the code. to assign is to give value to an object. to define is to.....?

// What is pseudocoding and why should you do it?
// a.pseudocode is code written in plain english used to better communicate a coding objective from client to engineer 

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// measure 2x cut once 



// b. Strings
// Create a variable called firstVariable
// a. firstVariable;

// Assign it the value of the string "Hello World"
// a. firstVariable = "Hello World";

// Change the value of this variable to some number
// a. firstVariable = 5;

// Store the value of firstVariable in a new variable called secondVariable
// a. secondVariable = firstVariable;
// Change the value of secondVariableto any string.
// a. secondVariable = "any string";
// What is the value of firstVariable?
// a. console.log(secondVariable); = "any string"

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

//a. yourNameand = "remy";
//a. console.log(`Hello, my name is ${yourNameand}`);
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');


// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// THE FARM

// animal = "cow";

// if (animal === "cow") {
//     console.log("mooooo")
// } else {
//     console.log("hey! youre not a cow")
// }

// E DRIVERS ED 

// let carlsAge = 17;

// if (carlsAge >= 16) {
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young.")
// }

// ||. loops 

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 100; i <= 400; i++) {
//     console.log(i)
// }

// for (let i = 100; i <= 400; i++) {
//     console.log(i)
// }

// for (let i = 12; i <= 4000; i += 3) {
//     console.log(i)
// }

// b get even 

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "<-- is an even number")
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log("I found a " + i + " High five! Three is a crowd")
//     }
//     if (i % 5 === 0) {
//         console.log("I found a " + i + " High five!")
//     }
//     if (i % 3 === 0) {
//         console.log("I found a " + i + " Three is a crowd")
//     } else {
//         console.log(i)
//     }
// }

// D. savings account


// let bank_account = 0

// for (let i = 0; i <= 10; i++) {
//     bank_account += i;
//     console.log(bank_account)
// }

// for (let i = 0; i <= 100; i++) {
//     bank_account += i;
//     console.log(bank_account * 2)
// }

// for each array example
// for_each_array_example

// for_each_loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let totalVal = 0

//     // ARR variable referrs to ARRAY TO BE LOOPED 
//     // NUM refers to ELEMENTS inside of array 

// arr.forEach(num => { totalVal += num })
// console.log(totalVal)

// template
// 
// array.forEach(element => { });



// ||| ARRAYS AND CONTROL FLOW


// A. Talk about it:
// What are the things in an array called?
// arrays contain elements
// // Do Arrays guarantee those things will be in order?
// YES arrays DO guarantee elements will be in order 
// // What real-life thing could you model with an array?
// a house, a body, a anything 



// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// quotes = ['i think therefore i am', 'one fish, two fish, red fish, blue fish', "apples & bananas"]


// // C. Accessing elements
// // Given the following array
// const randomThings = [1, 10, "Hello", true]

// // How do you access the 1st element in the array?

// console.log(randomThings[0])

// // Change the value of "Hello"to "World"
// randomThings[2] = "world"
//     // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings)

// D. Change values

// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?

// ourClass[2]

// Change the value of "Github" to "Octocat"

// ourClass[4] = "octocat"
// ourClass.pop;
// ourClass.push("Octocat");

// console.log(ourClass)

// // Add a new element, "Cloud City" to the array

// ourClass.push('Cloud City')
// console.log(ourClass)



// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

// myArray.push("Aegon");
// myArray.push("another string");
// console.log(myArray);

// // Remove the 5from the beginning of the array.

// myArray.shift();

// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('Bob Marley');

// console.log(myArray)
//     // Remove the string of your choice from the end of the array.

// myArray.pop();

// console.log(myArray);
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
// // Array.prototype.reverse();
// console.log(myArray.reverse())


// // What does mutate mean? Did the .reverse()method return anything?
// [ 'Aegon', 20, 500, 10, 'Bob Marley' ]


// F. Biggie Smalls

// Create a variable that contains an integer.
// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// let biggie = 10

// if (biggie < 100) {
//     console.log("little number")

// } else {
//     console.log("big number")

// }

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log monkey

// let number = 7

// if (number < 5) {
//     console.log("little number")
// } else if (number > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey")
// }


// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// console.log("krystin is rocking that " + kristynsCloset[2] + " today!")

// kristynsCloset.splice(6, 0, "raybans")
// console.log(kristynsCloset)

// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)
// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ],
//     [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ],
//     [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][0]);
// console.log(thomsCloset[2][1]);

// console.log("Thom is looking fierce in a" + thomsCloset[0][1] + "and" + thomsCloset[2][0]);

// thomsCloset[1][1] = "footie Pajamas"


// IV FUNCTIONS
// A. 

// const printGreeting = (name) => {
//     console.log("hello there " + name)
// }
// printGreeting("slimer")


// B.

// const printCool = (name) => {
//     console.log(name + " is cool")
// }
// printCool("remy")

// C.

// const CalculateCube = (x) => {
//     console.log(x * x * x)
// }
// CalculateCube(5)

// D.
// const isVowel = (word) => {
//     if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u" || word === "y") {
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(isVowel("e"))

// E. 

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters
//  (strings). The function should return an array of numbers 
// where each number is the length of the corresponding string.



// const getTwoLengths = (x, y) => {
//     return [x.length, y.length]
// }
// console.log(getTwoLengths("happy", "joy"))


//F. !!!!!!!!!!!!!!!!!!!!!!!!
// Write a function getMultipleLengthsthat accepts a single 
// parameter as an argument: an array of strings. The function
// should return an array of numbers where each number is the
// length of the corresponding string.

// const getMultipleLengths = (x) => {
//     x = [];
//     x.forEach(x => {
//         return [x.length]
//     });
// }
// console.log(getMultipleLengths(['happy', 'joy', 'funnnnny']))


// function getMultipleLengths(x) {
//     return x.map(function(str) {
//         return str.length;
//     });
// }
// console.log(getMultipleLengths(["What", "are", "up"]));




//G.
// const maxOfThree = (x, y, z) => {
//     if (x > y && x > z) {
//         return x
//     } else if (y > x && y > z) {
//         return y
//     } else if (z > x && z > y) {
//         return z
//     }
// }
// console.log(maxOfThree(300, 5, 7))

// H.

// const longestStringInArray = (bigString) => {
//     let biggestString = ""
//     for (let i = 0; i < bigString.length; i++) {
//         if (bigString[i].length > biggestString.length) {
//             biggestString = bigString[i]
//         }
//     }
//     let bigStringSize = biggestString.length
//     return bigStringSize
// }
// console.log(longestStringInArray(["a", "fun", "dope", "chuck", "robots"]))


// OBJECTS

// A.
// let user = { name: "remy", email: "remy@mail.com", age: 35, purchased: [] }

// B.

// user.email = "newemail@mail.com"
// console.log(user.email)

// user.age++;
// console.log(user.age)

// // c.
// user.location = "newyork"
// console.log(user.location)


// D.
// user.purchased.push("carbohydrates")
// user.purchased.push("peace of mind")
// user.purchased.push("Merino Jodhpurs")

// console.log(user.purchased[2])

// E.
// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "china",
//     purchased: [],
// }

// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// user.friend.purchased.push("The One Ring")
// user.friend.purchased.push("A Latte")
// console.log(user.friend.purchased[1])


// F.

// let newArray = []
// for (let i = 0; i < user.purchased.length; i++) {
//     newArray = user.purchased[i];

//     console.log(newArray)
// }

// let newArray1 = []
// for (let j = 0; j < user.friend.purchased.length; j++) {
//     newArray1 = user.friend.purchased[j];

// }

// G. 
// const updateUser = () => {
//     user.age = user.age++
//         user.name.toUpperCase
// }
// console.log(updateUser())



let cat1 = { name: "tom", breed: "brownie", age: 4 }

console.log(cat1.age)

console.log(cat1.breed)

let cat2 = { name: "jerry", breed: "hairy", age: 2 }

console.log(cat2.age)

console.log(cat2.breed)

const combineCats = (mama, papa) => {
    console.log(cat1, cat2)
}
combineCats()

let child = {
    name: cat1.name + cat2.name


}