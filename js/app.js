// Exercise 1
console.log("The cake was delicious")

String.prototype.setAtTheEnd = function(word) {
    let text = `${this.replace(word, "")} ${word}`;

    return text.split("  ").join(" ");
}

console.log("The cake was delicious".setAtTheEnd("cake"));
