let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("hidden");
    } else {
        document.getElementById("navbar").classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
}

