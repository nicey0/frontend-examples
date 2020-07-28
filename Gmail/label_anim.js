let divs = document.querySelectorAll("form .text-input");
let domain = document.querySelector("#username > span");
divs.forEach(d => {
    d.firstElementChild.addEventListener("focus", _ => {
        d.children[1].classList.add("top", "active");
    })
    d.firstElementChild.addEventListener("blur", _ => {
        d.children[1].classList.add("hack");
        d.children[1].classList.remove("active");
        if (d.children[0].value === "") {
            d.children[1].classList.remove("hack");
            d.children[1].classList.remove("top");
        }
    })
})
