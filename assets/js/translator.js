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
8 = Preposition

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
	tryifempty();
}

document.addEventListener("keyup", function(event) {
	tryifempty();
});

// -----      TRANSLATOR      -----
function tryifempty() {
	if (document.getElementById("wordinput").value == "") {
		document.getElementById("resultdiv").innerHTML = "";
	} else {
		starttrans();
	}
}

function starttrans() {
	var userinput = document.getElementById("wordinput").value;
	if (userinput.charAt(userinput.length - 1) == ' ') {
		do {
			userinput = userinput.slice(0, userinput.length - 1);
		} while (userinput.charAt(userinput.length - 1) == ' ')
	}
	if (userinput.charAt(0) == ' ') {
		do {
			userinput = userinput.slice(1, userinput.length);
		} while (userinput.charAt(0) == ' ')
	}
	if (transdir == 1) {
		var i = englishvoc.length - 1;
		do {
			if (englishvoc[i][0] == userinput) {
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
						} else if (wnum == 8) {
							wordtype = "Prepositon"
						}
						resultdivvar = resultdivvar + "<h3>" + wordtype + "</h3>";
						wordtypes[wnum] = true;
					}
					var revtransnum = kalestiavoc[englishvoc[submitnum][1][translations]][1].length - 1;
					var revtrans = "loremipsum";
					var retransvar = "";
					var revtransvar = "";
					do {
						retransvar = englishvoc[kalestiavoc[englishvoc[submitnum][1][translations]][1][revtransnum]][0];
						if (revtrans == "loremipsum") {
							revtrans = "<a onClick='retransfun(\"" + retransvar + "\")'>" + retransvar + "</a>";
						} else {
							revtrans = revtrans + ", " + "<a onClick='retransfun(\"" + retransvar + "\")'>" + retransvar + "</a>";
						}
						revtransnum--;
					} while (revtransnum > -1);
					revtransvar = kalestiavoc[englishvoc[submitnum][1][translations]][0];
					resultdivvar = resultdivvar + "<p><a onClick='revtransfun(\"" + revtransvar + "\")'>" + revtransvar + "</a>" + " - " + revtrans + "</p>";
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
			if (kalestiavoc[i][0] == userinput) {
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
						resultdivvar = resultdivvar + "<h2>" + wordtype + "</h2>";
						wordtypes[wnum] = true;
					}
					var revtransnum = englishvoc[kalestiavoc[submitnum][1][translations]][1].length - 1;
					var revtrans = "loremipsum";
					var retransvar = "";
					var revtransvar = "";
					do {
						retransvar = kalestiavoc[englishvoc[kalestiavoc[submitnum][1][translations]][1][revtransnum]][0];
						if (revtrans == "loremipsum") {
							revtrans = "<a onClick='retransfun(\"" + retransvar + "\")'>" + retransvar + "</a>";
						} else {
							revtrans = revtrans + ", " + "<a onClick='retransfun(\"" + retransvar + "\")'>" + retransvar + "</a>";
						}
						revtransnum--;
					} while (revtransnum > -1);
					revtransvar = englishvoc[kalestiavoc[submitnum][1][translations]][0];
					resultdivvar = resultdivvar + "<p><a onClick='revtransfun(\"" + revtransvar + "\")'>" + revtransvar + "</a>" + " - " + revtrans + "</p>";
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
function retransfun(revsubmit) {
	document.getElementById("wordinput").value = revsubmit;
	starttrans();
}
function revtransfun(revsubmit) {
	document.getElementById("wordinput").value = revsubmit;
	switchdir();
}
