const greet = require(`./greet.js`);
const goodbye = require(`./goodbye.js`);
const nameObj = {
    name1: "John",
    name2: "Jimmy",
    name3: "Lisa",
    name4: "Bort",
    name5: "Mary"
}
const nameObj2 = {
    name1: "Goku",
    name2: "Ichigo",
    name3: "Naruto",
    name4: "Luffy"
}

// make function that is reusable
// so you can pass in any object and have it greet
// and say goodbye to the name in that object

function introductions(Obj) {
    for (let name in Obj) {
        greet(Obj[name])
        goodbye(Obj[name])
    }
}

// for (let name in nameObj) {
//     greet(nameObj[name])
//     goodbye(nameObj[name])
// }

introductions(nameObj2)