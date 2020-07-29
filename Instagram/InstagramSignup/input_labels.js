divs = document.getElementsByClassName("input_labeled");
for (let d of divs) {
    console.log(d);
    d.firstElementChild.addEventListener("input", _ => {
        if (d.firstElementChild.value !== "") {
            d.lastElementChild.classList.add("top");
            d.firstElementChild.classList.add("bot");
        }
        else {
            d.lastElementChild.classList.remove("top");
            d.firstElementChild.classList.remove("bot");
        }
    })
    d.firstElementChild.addEventListener("blur", _ => {
        console.log(d.firstElementChild.value);
    })
}
