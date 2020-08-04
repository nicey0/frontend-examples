/* Sidebar */
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

/* Social Media Links */
button = document.getElementsByClassName("links")[0];
links = document.getElementById("sm-links");
open = false;

button.addEventListener("click", _ => {
    open = !open;
    toggle_links_sect(open);
})

function toggle_links_sect(new_state) {
    new_state ? links.classList.add("active") : links.classList.remove("active");
}
