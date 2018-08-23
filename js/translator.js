/*

VALUES OF WORD TYPES:

0 = Noun
1 = Verb
2 = Adjective
3 = Pronoun
4 = Nummeral
5 = Conjunction
6 = Adverb
7 = Interjection

*/
// ----- PREPARING TRANSLATOR -----
var transdir = 0;
switchdir();
function switchdir() {
	if (transdir == 0) {
		document.getElementById("transdirh").innerHTML = "Translate from English to Kalestia."
		transdir = 1;
	} else if (transdir == 1) {
		document.getElementById("transdirh").innerHTML = "Translate from Kalestia to English."
		transdir = 0;
	}
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode==13) {
		starttrans();
	}
});

// -----      TRANSLATOR      -----
function starttrans() {
	if (transdir == 1) {
		var i = englishvoc.length - 1;
		do {
			if (englishvoc[i][0] == document.getElementById("wordinput").value) {
				var submitnum = i;
				i = -2;
				var wordtype = "none";
				var wordtypes = [false, false, false, false, false, false, false, false];
				var translations = englishvoc[submitnum][1].length - 1;
				var resultdivvar = "";
				do {
					var wnum = kalestiavoc[englishvoc[submitnum][1][translations]][2];
					if (wordtypes[wnum] == false) {
						if (wnum == 0) {
							wordtype = "Noun"
						} else if (wnum == 1) {
							wordtype = "Verb"
						} else if (wnum == 2) {
							wordtype = "Adjective"
						} else if (wnum == 3) {
							wordtype = "Pronoun"
						} else if (wnum == 4) {
							wordtype = "Nummeral"
						} else if (wnum == 5) {
							wordtype = "Conjunction"
						} else if (wnum == 6) {
							wordtype = "Adverb"
						} else if (wnum == 7) {
							wordtype = "Interjection"
						}
						resultdivvar = resultdivvar + "<h1>" + wordtype + "</h1>";
						wordtypes[wnum] = true;
					}
					var revtransnum = kalestiavoc[englishvoc[submitnum][1][translations]][1].length - 1;
					var revtrans = "loremipsum";
					do {
						if (revtrans == "loremipsum") {
							revtrans = englishvoc[kalestiavoc[englishvoc[submitnum][1][translations]][1][revtransnum]][0];
						} else {
							revtrans = revtrans + ", " + englishvoc[kalestiavoc[englishvoc[submitnum][1][translations]][1][revtransnum]][0];
						}
						revtransnum--;
					} while (revtransnum > -1);
					resultdivvar = resultdivvar + "<p>" + kalestiavoc[englishvoc[submitnum][1][translations]][0] + " - " + revtrans + "</p>";
					translations--;
				} while (translations > -1);
				document.getElementById("resultdiv").innerHTML = resultdivvar
			}
			i--;
			if (i == -1) {
				document.getElementById("resultdiv").innerHTML = "There is no Kalestian translation matching your input. Please ensure that you typed your word correctly. If this is the case, a translation might not yet be added, so feel free to suggest one!"
			}
		} while (i > -1);
	}
	if (transdir == 0) {
		var i = kalestiavoc.length - 1;
		do {
			if (kalestiavoc[i][0] == document.getElementById("wordinput").value) {
				var submitnum = i;
				i = -2;
				var wordtype = "none";
				var wordtypes = [false, false, false, false, false, false, false, false];
				var translations = kalestiavoc[submitnum][1].length - 1;
				var resultdivvar = "";
				do {
					var wnum = englishvoc[kalestiavoc[submitnum][1][translations]][2];
					if (wordtypes[wnum] == false) {
						if (wnum == 0) {
							wordtype = "Noun"
						} else if (wnum == 1) {
							wordtype = "Verb"
						} else if (wnum == 2) {
							wordtype = "Adjective"
						} else if (wnum == 3) {
							wordtype = "Pronoun"
						} else if (wnum == 4) {
							wordtype = "Nummeral"
						} else if (wnum == 5) {
							wordtype = "Conjunction"
						} else if (wnum == 6) {
							wordtype = "Adverb"
						} else if (wnum == 7) {
							wordtype = "Interjection"
						}
						resultdivvar = resultdivvar + "<h1>" + wordtype + "</h1>";
						wordtypes[wnum] = true;
					}
					var revtransnum = englishvoc[kalestiavoc[submitnum][1][translations]][1].length - 1;
					var revtrans = "loremipsum";
					do {
						if (revtrans == "loremipsum") {
							revtrans = kalestiavoc[englishvoc[kalestiavoc[submitnum][1][translations]][1][revtransnum]][0];
						} else {
							revtrans = revtrans + ", " + kalestiavoc[englishvoc[kalestiavoc[submitnum][1][translations]][1][revtransnum]][0];
						}
						revtransnum--;
					} while (revtransnum > -1);
					resultdivvar = resultdivvar + "<p>" + englishvoc[kalestiavoc[submitnum][1][translations]][0] + " - " + revtrans + "</p>";
					translations--;
				} while (translations > -1);
				document.getElementById("resultdiv").innerHTML = resultdivvar
			}
			i--;
			if (i == -1) {
				document.getElementById("resultdiv").innerHTML = "There is no English translation matching your input. Please ensure that you typed your word correctly."
			}
		} while (i > -1);
	}
}
