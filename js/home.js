var header = null;
var sticky = 0;

$(document).ready(function () {
    header = document.getElementById("main-nav");
    sticky = header.offsetTop;
    window.onscroll = function () {
        myFunction();
    };
    myFunction();
});

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        $(".svh-header").width(80);
    } else {
        header.classList.remove("sticky");
    }
}
