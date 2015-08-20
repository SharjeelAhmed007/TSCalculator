function Add() {
    var num1 = document.getElementById("fnum").value;
    var num2 = document.getElementById("snum").value;
    var res = parseInt(num1) + parseInt(num2);
    parseInt(document.getElementById("res").innerHTML = "The Result " + res);
}
function Subtract() {
    var num1 = document.getElementById("fnum").value;
    var num2 = document.getElementById("snum").value;
    var res = parseInt(num1) - parseInt(num2);
    parseInt(document.getElementById("res").innerHTML = "The Result " + res);
}
function multiply() {
    var num1 = document.getElementById("fnum").value;
    var num2 = document.getElementById("snum").value;
    var res = parseInt(num1) * parseInt(num2);
    parseInt(document.getElementById("res").innerHTML = "The Result " + res);
}
function divide() {
    var num1 = document.getElementById("fnum").value;
    var num2 = document.getElementById("snum").value;
    var res = parseInt(num1) / parseInt(num2);
    parseInt(document.getElementById("res").innerHTML = "The Result " + res);
}
