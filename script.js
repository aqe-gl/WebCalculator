document.querySelector("button").onclick = function() {
    alert("Hello!");
};

document.getElementById("btn").onclick = function () {
    alert("Hello!");
}

document.getElementById("enter-name").onclick = function () {
    let ans = prompt("Enter your name: ");
    console.log(ans);
}

document.querySelector('.add').onclick = function () {
    //alert(2+2)
    //console.log(document.querySelector(".number1").value)
    //console.log(document.querySelector(".number2").value)
    let num1 = document.querySelector('.number1').value;
    let num2 = document.querySelector('.number2').value
    let ans = parseInt(num1) + parseInt(num2)
    //console.log(typeof(num1));
    alert(ans);
}

document.querySelector('.subtract').onclick = function () {
    let num1 = document.querySelector('.number1').value;
    let num2 = document.querySelector('.number2').value;
    let ans = parseInt(num1) - parseInt(num2);
    alert(ans);
}