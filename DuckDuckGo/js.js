sidebar = document.getElementsByTagName("aside")[0];
open = document.getElementsByClassName("sidebar-btn")[0];
close = sidebar.children['x'];

open.addEventListener("click", _ => {
    toggleSidebar(true);
})

close.addEventListener("click", _ => {
    toggleSidebar(false);
})

function toggleSidebar(new_state) {
    new_state ? sidebar.classList.add("active") : sidebar.classList.remove("active");
}
