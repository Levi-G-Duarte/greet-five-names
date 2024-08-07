//create a function called greet that
//takes a name parameter
//log a greeting to that name in the function
//create a file called names.txt
//list 5 names (as strings) csv format in that file
//run the greet.js script so that a greeting is said to all give names

function greet(name) {
    console.log(`Hello my name is ${name}`)
}

let listNames = ["John", "Jimmy", "Lisa", "Bort", "Mary"]

// listNames.forEach((name) => {
//     greet(name);
// });

module.exports = greet;