let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (currentScrollPos > 40) {
            document.getElementById("navbar").style.backgroundColor = "#fff";
        } else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
        }
    } else {
        document.getElementById("navbar").style.top = "-140px";
    }
    prevScrollpos = currentScrollPos;
}
