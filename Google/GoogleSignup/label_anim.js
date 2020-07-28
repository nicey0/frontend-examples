// Domain fix
let container = document.getElementById("username");
let input = container.getElementsByClassName("text-input")[0].children[0];
let domain = container.getElementsByTagName("span")[1];
// Label animation
let divs = document.querySelectorAll("form .text-input");
divs.forEach(d => {
    d.firstElementChild.addEventListener("focus", _ => {
        d.children[1].classList.add("top", "active");
        if (d.firstElementChild === input)
            domain.classList.add("domain-active");
    })
    d.firstElementChild.addEventListener("blur", _ => {
        d.children[1].classList.add("hack");
        d.children[1].classList.remove("active");
        if (d.firstElementChild.value === "") {
            d.children[1].classList.remove("hack");
            d.children[1].classList.remove("top");
        }
        if (d.firstElementChild === input)
            domain.classList.remove("domain-active");
    })
});
