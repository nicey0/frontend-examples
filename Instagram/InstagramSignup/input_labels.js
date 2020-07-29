function isValidInput(value) {
    return value === "valid";
}

divs = document.getElementsByClassName("input_labeled");
for (let d of divs) {
    d.firstElementChild.addEventListener("input", _ => {
        if (d.firstElementChild.value !== "") { // Has input
            d.children[1].classList.add("top");
            d.firstElementChild.classList.add("bot");
            if (isValidInput(d.firstElementChild.value))
                d.lastElementChild.style.display = "block";
            else
                d.lastElementChild.style.display = "none";
        }
        else { // Doesn't have input
            d.children[1].classList.remove("top");
            d.firstElementChild.classList.remove("bot");
        }
    });
}
