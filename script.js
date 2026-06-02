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