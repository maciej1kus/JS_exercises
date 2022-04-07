// Exercise 1 - native method
console.log("The cake was delicious")

String.prototype.setAtTheEnd = function(word) {
    let text = `${this.replace(word, "")} ${word}`;

    return text.split("  ").join(" ");
}

console.log("The cake was delicious".setAtTheEnd("cake"));



// Exercise 2 - bubble sort algorithm
console.log("///")

const bubbleSort = (arr) => {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                isSorted = false;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 1, 15, 0, 44, 24, 67, 9]))


// Exercise 3 - Who likes it? [Codewars]
console.log("///")

function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}

console.log(likes(["Bob", "Robert", "John", "Mike"]));
console.log(likes([]));
console.log(likes(["Sam"]));