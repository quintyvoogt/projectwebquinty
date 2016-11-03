/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var kleur = document.querySelector("aside")

function maakblauw() {
    kleur.classList.add("bekijk")
}

function maakgroen() {
    kleur.classList.remove("bekijk")
}

kleur.addEventListener("mouseenter", maakblauw, false)
kleur.addEventListener("mouseleave", maakgroen, false)
//micro 1
