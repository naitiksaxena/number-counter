let result = document.getElementById("result");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let count = 0;

decrease.addEventListener("click", () => {
    count--;
    result.innerHTML = count;
})

reset.addEventListener("click", () => {
    count = 0; count
    result.innerHTML = count;
})

increase.addEventListener("click", () => {
    count++;
    result.innerHTML = count;
})