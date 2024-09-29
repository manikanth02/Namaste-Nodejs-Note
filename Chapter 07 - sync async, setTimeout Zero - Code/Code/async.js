const fs = require("fs");
const https = require("https");

console.log("Asynchronous Javascript")

var a = 5;
var b = 10;


https.get("https://dummyjson.com/products/1", (res) => {
    console.log("data fetch successfully")
})

setTimeout(() => {
    console.log("Execute it after 5 seconds")
}, 5000)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("file data:" + data)
})

function multiply(x, y) {
    const result = x * y;
    return result
}

const c = multiply(a, b)
console.log("Multiplication ans is:" + c)