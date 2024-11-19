var header = null;
var sticky = 0;
var totalRotation = 0;

$(document).ready(function () {
    header = document.getElementById("main-nav");
    sticky = header.offsetTop;
    window.onscroll = function () {
        myFunction();
    };
    myFunction();
    rotateLogo();
});

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        $(".svh-header").width(80);
    } else {
        header.classList.remove("sticky");
        rotateLogoBack();
    }
    rotateLogo();
}

function rotateLogo() {
    totalRotation += 360;
    if (totalRotation < 2000) {
        var part1 = document.getElementById("svg_logo_propellor");
        var part2 = document.getElementById("svg_logo_o");
        var part3 = document.getElementById("svg_logo_center");
        part1.style.transform = "rotate(" + totalRotation.toString() + "deg)";
        part2.style.transform = "rotate(" + totalRotation.toString() + "deg)";
        part3.style.transform = "rotate(" + totalRotation.toString() + "deg)";
    }
}

function rotateLogoBack() {
    var part1 = document.getElementById("svg_logo_propellor");
    var part2 = document.getElementById("svg_logo_o");
     var part3 = document.getElementById("svg_logo_center");
    part1.style.transform = "rotate(0deg)";
    part2.style.transform = "rotate(0deg)";
    part3.style.transform = "rotate(0deg)";
    totalRotation = 0;
}
