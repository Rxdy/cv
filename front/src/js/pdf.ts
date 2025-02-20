import $ from "jquery";
const jq = $.noConflict();
document.addEventListener("DOMContentLoaded", () => {
    paramSizeBody();
    paramColorBody();
    $(window).on("resize", paramSizeBody);
    $(window).on("resize", paramColorBody);
});

function paramSizeBody() {
    const largeur: number = window.innerWidth;
    const hauteur: number = window.innerHeight;
    jq("body").css("width", largeur + "px");
    jq("body").css("height", hauteur + "px");
}

function paramColorBody() {
    const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkMode) {
        jq("body").css("background", "#2A2A2E");
    } else {
        jq("body").css("background", "#f4f3f3");
    }
}
