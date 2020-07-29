divs = document.getElementsByClassName("input_labeled");
for (let d of divs) {
    d.firstElementChild.addEventListener("input", _ => {
        if (d.firstElementChild.value !== "") { // Has input
            d.children[1].classList.add("top");
            d.firstElementChild.classList.add("bot");
        }
        else { // Doesn't have input
            d.children[1].classList.remove("top");
            d.firstElementChild.classList.remove("bot");
        }
        displayCorrectVIcon(d.firstElementChild.value, d.querySelector(".v"), d.querySelector(".i"));
    });
}

function isValidInput(value) {
    if (value === "valid") return true;
    else if (value === "invalid") return false;
    else return null;
}

function displayCorrectVIcon(value, valid, invalid) {
    switch (isValidInput(value)) {
    case true:
        valid.style.display = "inline-block";
        invalid.style.display = "none";
        break;
    case  false:
        valid.style.display = "none";
        invalid.style.display = "inline-block";
        break;
    default:
        valid.style.display = "none";
        invalid.style.display = "none";
    }
}
