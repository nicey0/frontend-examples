let divs = document.querySelectorAll("form .text-input");
let domain = document.querySelector("#username > span");
divs.forEach(d => {
    d.firstElementChild.addEventListener("focus", e => {
        console.log(e);
    })
})
