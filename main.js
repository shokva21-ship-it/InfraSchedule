const btn1 = document.querySelector("#button-text-div1");
const btn2 = document.querySelector("#button-text-div2");
const btn3 = document.querySelector("#button-text-div3");

const text1 = document.querySelector("#text-div1\\ ");
const text2 = document.querySelector("#text-div2\\ ");
const text3 = document.querySelector("#text-div3\\ ");

btn1.addEventListener("click", function () {
    text1.style.display = "grid";
    text2.style.display = "none";
    text3.style.display = "none";
});

btn2.addEventListener("click", function () {
    text1.style.display = "none";
    text2.style.display = "grid";
    text3.style.display = "none";
});

btn3.addEventListener("click", function () {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "grid";
});