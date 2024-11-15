var logoRotation = 0;

$(document).ready(function(){
    rotateLogo(1090);
});


function rotateLogo(degrees){
    let deg = logoRotation + degrees;
    logoRotation = deg;
    propellor = document.getElementsByClassName("prpld-brand-propellor")[0];
    propellor.style.webkitTransform = 'rotate('+deg+'deg)'; 
    propellor.style.mozTransform    = 'rotate('+deg+'deg)'; 
    propellor.style.msTransform     = 'rotate('+deg+'deg)'; 
    propellor.style.oTransform      = 'rotate('+deg+'deg)'; 
    propellor.style.transform       = 'rotate('+deg+'deg)'; 
}