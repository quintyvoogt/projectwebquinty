/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var aside = document.querySelector("aside")
var change = document.getElementById("click")
var scroll = document.querySelector("section")

function alleverhalen() {
    change.innerHTML = "Alle verhalen :"
    scroll.scrollIntoView(true);
}

aside.addEventListener("click", alleverhalen, false)
