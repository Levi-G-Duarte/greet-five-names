const namesArr = ["John", "Jimmy", "Lisa", "Bort", "Mary"]

const namesArr2 = ["Goku", "Naruto", "Luffy", "Ichigo"];
// for (let i = 0; i < namesArr.length - 1; i++){
//     console.log(`Hello ${namesArr[i]}`);
// }
//wrap this forEach in a function

function greetings(arr) {
    arr.forEach(name => {
        console.log(`Hello ${name}`)
    })
}

// greetings(namesArr)
// greetings(nameArr2)

global.namesArr = namesArr;
global.greetings = greetings;
global.namesArr2 = namesArr2;