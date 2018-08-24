el1x1x0.style.display = "none";
el2x1x0.style.display = "none";
el2x1x0.style.display = "none";
el2x2x0.style.display = "none";
el2x3x0.style.display = "none";
el2x4x0.style.display = "none";
el2x5x0.style.display = "none";
el2x6x0.style.display = "none";
el2x7x0.style.display = "none";
el3x1x0.style.display = "none";
el3x2x0.style.display = "none";
el3x3x0.style.display = "none";
el3x4x0.style.display = "none";
el3x5x0.style.display = "none";
el4x1x0.style.display = "none";
el4x2x0.style.display = "none";
el4x3x0.style.display = "none";
function expfun(x,y,z) {
	var clickeddiv = document.getElementById("el" + x + "x" + y + "x" + z);
    if (clickeddiv.style.display === "none") {
        clickeddiv.style.display = "block";
    } else {
        clickeddiv.style.display = "none";
    }
}

