let divs = document.querySelectorAll("form .text-input");
let domain = document.querySelector("#username > span");
divs.forEach(d => {
    d.firstElementChild.addEventListener("focus", _ => {
        d.children[1].classList.add("top");
    })
    d.firstElementChild.addEventListener("blur", _ => {
        d.children[1].classList.remove("top");
    })
})
