// When window is loaded(browser knows), initialize function is called
window.onload = initialize;

function initialize() {
    document.getElementById("sp").innerHTML = "<b>Loaded</b>";

    document.onmousemove = changeBackgroundColor;
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

function changeToRed() {
    document.bgColor = 'Red';
}

function changeToBlue() {
    document.bgColor = 'Blue';
}

function changeBackgroundColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    console.log(red + ' , ' + green + ' , ' + blue);

    document.bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')'; // => rgb(19, 56, 34)
}