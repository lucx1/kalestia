el1x0x0.style.display = "none";
el2x0x0.style.display = "none";
el3x0x0.style.display = "none";
el4x0x0.style.display = "none";
function expfun(x,y,z) {
	var clickeddiv = document.getElementById("el" + x + "x" + y + "x" + z);
    if (clickeddiv.style.display === "none") {
        clickeddiv.style.display = "block";
    } else {
        clickeddiv.style.display = "none";
    }
}

