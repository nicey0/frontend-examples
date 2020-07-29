divs = document.getElementsByClassName("input_labeled");
signup_btn = document.getElementById("submit")
form_valid = [false, false, false, false];
for (let i=0; i<divs.length; i++) {
    let d = divs[i];
    d.firstElementChild.addEventListener("input", _ => {
        if (d.firstElementChild.value !== "") { // Has input
            d.children[1].classList.add("top");
            d.firstElementChild.classList.add("bot");
        }
        else { // Doesn't have input
            d.children[1].classList.remove("top");
            d.firstElementChild.classList.remove("bot");
        }
        displayCorrectVIcon(d.firstElementChild.value, d.querySelector(".v"), d.querySelector(".i"), i);
        if (areEqual(form_valid, [true, true, true, true])) {
            signup_btn.classList.remove("inactive");
            signup_btn.disabled = false;
            console.log("yeet");
        } else {
            signup_btn.classList.add("inactive");
            signup_btn.disabled = true;
        }
    });
}

function isValidInput(value) {
    if (value === "valid") return true;
    else if (value === "invalid") return false;
    else return null;
}

function displayCorrectVIcon(value, valid, invalid, findex) {
    switch (isValidInput(value)) {
    case true:
        valid.style.display = "inline-block";
        invalid.style.display = "none";
        form_valid[findex] = true;
        break;
    case  false:
        valid.style.display = "none";
        invalid.style.display = "inline-block";
        form_valid[findex] = false;
        break;
    default:
        valid.style.display = "none";
        invalid.style.display = "none";
        form_valid[findex] = false;
    }
}

function areEqual(ar1, ar2) {
    for (let i=0; i<5; i++) {
        if (ar1[i] !== ar2[i])
            return false;
    }
    return true;
}
