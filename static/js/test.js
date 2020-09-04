// When window is loaded(browser knows), initialize function is called
window.onload = initialize;

function initialize() {
    document.getElementById("sp").innerHTML = "<b>Loaded</b>";
}

function sayHello() {
    document.getElementById("sp").innerHTML = "Hello Shubha";
}

function add() {
    var first = parseInt(document.getElementById("txtFirst").value);
    var second = parseInt(document.getElementById("txtSecond").value);

    document.getElementById("spResult").innerHTML = first + second;

    console.log(first + second);
    alert(first + second);
}