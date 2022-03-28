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


