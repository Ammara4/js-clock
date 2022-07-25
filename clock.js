let time = document.querySelector("#time");

function start() {
    let startTime = new Date()
    time.innerHTML = startTime
}
let mvar = setInterval(start, 1000);

//bn.addEventListener('mouseover', start)
let bn = document.querySelector("#time");
function mainFunc() {
    function simpleFunc() {
        bn.style.display = block;
        bn.style.border = "1px solid red";
    }
    setTimeout(simpleFunc, 3000);
}
