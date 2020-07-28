show = document.getElementById("show");
hide = document.getElementById("hide");
inputs = document.querySelectorAll("input[type='password']");
c = document.querySelector("#password .show-hide .circle")
showing = "hide";
// initialize state
// it's a hack, yes, what about it? >:(
alter_state(showing, show, hide);

// Events
playing = false;
c.addEventListener("animationend", _ => {
    c.classList.remove("animate");
    playing = false;
});
c.addEventListener("click", _ => {
    if (!playing) {
        c.classList.add("animate");
        playing = true;
        showing = showing === "hide" ? "show" : "hide";
        alter_state(showing, show, hide);
    }
});

function alter_state(showing, show, hide) {
    console.log(showing, show, hide);
    switch (showing) {
        case "hide":
            show.style.opacity = 0.0;
            hide.style.opacity = 1.0;
            inputs.forEach(i => {
                i.type = "password";
            })
            break;
        case "show":
            show.style.opacity = 1.0;
            hide.style.opacity = 0.0;
            inputs.forEach(i => {
                i.type = "text";
            })
            break;
    }
}
