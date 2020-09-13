// example 1
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
// example 2
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("plus").innerHTML =
    "The total is: " + total;
// example 3
var book = "maths";
if (book == "history") {
    document.write("<b>History Book</b>");
} else if (book == "maths") {
    document.write("<b>Maths Book</b>");
} else if (book == "economics") {
    document.write("<b>Economics Book</b>");
} else {
    document.write("<b>Unknown Book</b>");
}
// example 4
for (var counter = 1; counter < 5; counter++) {
    console.log('Inside the loop:' + counter);
}
console.log('Outside the loop:' + counter);
// example 5
var j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}
