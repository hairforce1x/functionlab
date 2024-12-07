// 1. Take an array of numbers and return the sum

array = [1, 2, 3]

// function sum(array = []) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total = array[i] += total;
//     }
//     return total
// }

// console.log(sum(array))

// Take an array of numbers and return the average

// function average(array) {
//     counter = 0;
//     for (let i=0; i<array.length; i++){
//         counter += array[i];
//     }
//     return counter / array.length;
// }

// console.log(average(array))

// Take an array of strings and return the longest string

// let arrayOfStrings = ["s", "med" "short", "medium","longerst"]

// function checkLength(arrayOfStrings) {
//     let highestLength = 0;
//     let longest = "";
//     arrayOfStrings.forEach((element) => {
//         if (element.length>highestLength){
//         highestLength = element.length;
//         longest = element;
//         }
//     })
//     return longest;
// }
// console.log(checkLength(arrayOfStrings));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

// let arrayOfStrings2 = ["s", "med", "short", "medium","longerst"]

// function longerThan (array, num) {
//     let newArray = [];
//     array.forEach((element) => {
//         if (element.length > num){
//             newArray.push(element)
//         }
//     });
//     return newArray;
// }


// console.log(longerThan(arrayOfStrings2, 4))

let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

function sortData(data, swap) {
    done = true;
    nextIndex = 1;
    currentIndex = 0;
    while (true) {
        if (nextIndex < data.length && currentIndex < data.length) {
            if (data[currentIndex]['age'] < data[nextIndex]['age']) {
                swap(data, currentIndex, nextIndex);
                done = false;
            }
        }
        currentIndex++;
        nextIndex++;
        if (done)
            break;
        else if (currentIndex >= data.length || nextIndex >= data.length) {
            currentIndex = 0;
            nextIndex = 1;
        }
    }
}
sortData(data, swap);
console.log(data);

function swap (array, index1, index2) {
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}