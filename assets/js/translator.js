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
var translated = false;

var differentform = 0;
// 1 = Conjugated Verb
// 2 = Adverb of an Adjective

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
		document.getElementById("resultdiv").innerHTML = "<p>Start translating by typing a word.</p><p>Note: The translator does not support sentences yet.";
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
					resultdivvar = resultdivvar + "<p><strong><a onClick='revtransfun(\"" + revtransvar + "\")'>" + revtransvar + "</a></strong>" + " - " + revtrans + "</p>";
					translations--;
				} while (translations > -1);
				document.getElementById("resultdiv").innerHTML = resultdivvar
			}
			i--;
			if (i == -1) {
				document.getElementById("resultdiv").innerHTML = "<p>There is no Kalestian translation matching your input. Please ensure that you typed your word correctly. If this is the case, a translation might not yet be added, so feel free to suggest one!</p><p>Note: The translator does not support sentences yet."
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
					resultdivvar = resultdivvar + "<p><strong><a onClick='revtransfun(\"" + revtransvar + "\")'>" + revtransvar + "</a></strong>" + " - " + revtrans + "</p>";
					translations--;
				} while (translations > -1);
				document.getElementById("resultdiv").innerHTML = resultdivvar
				translated = true;
			}
			i--;
		} while (i > -1);
		if (translated == false) {
			if (userinput.charAt(userinput.length - 1) == 'a' || userinput.charAt(userinput.length - 1) == 'o' || userinput.charAt(userinput.length - 1) == 'e') {
				if (userinput.charAt(userinput.length - 1) == 'a') {
					var person = 0;
				} else if (userinput.charAt(userinput.length - 1) == 'o') {
					var person = 1;
				} else if (userinput.charAt(userinput.length - 1) == 'e') {
					var person = 2
				}
				if (userinput.charAt(userinput.length - 2) == 'i') {
					nextvar = 2;
					var plural = true;
				} else {
					nextvar = 1;
					var plural = false;
				}
				i = kalestiavoc.length - 1;
				do {
					if (userinput.charAt(userinput.length - nextvar - 2) != userinput.charAt(userinput.length - nextvar - 1)) {
						if (kalestiavoc[i][0] == userinput.slice(0, userinput.length - nextvar) && kalestiavoc[i][2] == 1) {
							translated = true;
							var tense = 1
							differentform = 1;
							var transmain = i
						} else if ((kalestiavoc[i][0] == userinput.slice(0, userinput.length - nextvar - 1) + 's' || kalestiavoc[i][0] == userinput.slice(0, userinput.length - nextvar - 1) + 'ks' ) && kalestiavoc[i][2] == 1 && userinput.charAt(userinput.length - nextvar - 1) == 'k') {
							// if (current vocab in loop is equal to userinput minus suffix + s or ks) && current vocab in the loop is a verb && userinput has k in the correct place of the suffix
							translated = true;
							var tense = 2;
							differentform = 1;
							var transmain = i;
						} else if ((kalestiavoc[i][0] == userinput.slice(0, userinput.length - nextvar - 1) + 's' || kalestiavoc[i][0] == userinput.slice(0, userinput.length - nextvar - 1) + 'ts' ) && kalestiavoc[i][2] == 1 && userinput.charAt(userinput.length - nextvar - 1) == 't') {
							// if (current vocab in loop is equal to userinput minus suffix + s or ts) && current vocab in the loop is a verb && userinput has t in the correct place of the suffix
							translated = true;
							var tense = 0;
							differentform = 1
							var transmain = i;
						}
					}
					i--;
				} while (i > -1);
			}
			if (userinput.charAt(userinput.length - 3) == 'i' && userinput.charAt(userinput.length - 2) == 'l' && userinput.charAt(userinput.length - 1) == 'e') {
				i = kalestiavoc.length - 1;
				do {
					if (kalestiavoc[i][0] == userinput.slice(0, userinput.length - 3) && kalestiavoc[i][2] == 2) {
						translated = true;
						differentform = 2;
						var transmain = i
					}
					i--;
				} while (i > -1);
			}
			if (translated == true) {
				if (differentform == 1) {
					var newi = 0;
					do {
						if (newi == 0) {
							var result1 = '<a onClick=\'revtransfun("' + englishvoc[kalestiavoc[transmain][1][0]][0] + '")\'>' + englishvoc[kalestiavoc[transmain][1][0]][0] + '</a>';
						} else {
							result1 = result1 + ', <a onClick=\'revtransfun("' + englishvoc[kalestiavoc[transmain][1][newi]][0] + '")\'>' + englishvoc[kalestiavoc[transmain][1][newi]][0] + '</a>';
						}
						newi++;
					} while (newi < kalestiavoc[transmain][1].length);
					var result2 = 'The form it is standing in is <strong>Indicative ';
					if (tense == 0) {
						result2 = result2 + 'Past, ';
					} else if (tense == 1) {
						result2 = result2 + 'Present, ';
					} else if (tense == 2) {
						result2 = result2 + 'Future, ';
					}
					if (person == 0) {
						result2 = result2 + '1st person ';
					} else if (person == 1) {
						result2 = result2 + '2nd person ';
					} else if (person == 2) {
						result2 = result2 + '3rd person ';
					}
					if (plural == true) {
						result2 = result2 + 'Plural Active'
					} else {
						result2 = result2 + 'Singular Active'
					}
					if (kalestiavoc[transmain][1].length == 1) {
						var result3 = 'A possible literal translation to English would be <strong>' + getresult4(englishvoc[kalestiavoc[transmain][1][0]][0], plural, person, tense);
					} else {
						var newj = 0;
						var result3 = 'Possible literal translations to English would be <strong>';
						do {
							if (newj == 0) {
								result3 = result3 + getresult4(englishvoc[kalestiavoc[transmain][1][0]][0], plural, person, tense);
							} else {
								result3 = result3 + ', ' + getresult4(englishvoc[kalestiavoc[transmain][1][newj]][0], plural, person, tense);
							}
							newj++;
						} while (newj < kalestiavoc[transmain][1].length);
					}
					if (tense == 0) {
						result3 = '<strong>Literal translations for past tense are not supported yet'
					}
					document.getElementById("resultdiv").innerHTML = '<p><strong>' + userinput + '</strong> is a conjugated form of <strong><a onClick=\'retransfun("' + kalestiavoc[transmain][0] + '")\'>' + kalestiavoc[transmain][0] + '</a></strong>, meaning <strong>' + result1 + '</strong>.</p><p>' + result2 + '</strong>.</p><p>' + result3 + '</strong>.</p>';
				} else if (differentform == 2) {
					var newi = 0;
					do {
						if (newi == 0) {
							var result1 = '<a onClick=\'revtransfun("' + englishvoc[kalestiavoc[transmain][1][0]][0] + '")\'>' + englishvoc[kalestiavoc[transmain][1][0]][0] + '</a>';
						} else {
							result1 = result1 + ', <a onClick=\'revtransfun("' + englishvoc[kalestiavoc[transmain][1][newi]][0] + '")\'>' + englishvoc[kalestiavoc[transmain][1][newi]][0] + '</a>';
						}
						newi++;
					} while (newi < kalestiavoc[transmain][1].length);
					document.getElementById("resultdiv").innerHTML = '<p><strong>' + userinput + '</strong> is the adverb form of <strong><a onClick=\'retransfun("' + kalestiavoc[transmain][0] + '")\'>' + kalestiavoc[transmain][0] + '</a></strong>, meaning <strong>' + result1 + '</strong>.</p><p><strong>Literal translations for adverb forms of adjectives are not supported yet</strong>.</p>'
				}
			} else {
				document.getElementById("resultdiv").innerHTML = "<p>There is no English translation matching your input. Please ensure that you typed your word correctly.</p><p>Note: The translator does not support sentences yet."
			}
		}
	}
	translated = false;
	differentform  = 0;
}
function getresult4(x, plural, person, tense) {
		var result4 = '';
		if (x == 'be' && tense == 1 || x.includes('be ') && tense == 1) {
			if (plural == false) {
				if (person == 0) {
					x = 'am' + x.slice(2, x.length);
				} else if (person == 1) {
					x = 'are' + x.slice(3, x.length);
				} else if (person == 2) {
					x = 'is' + x.slice(2, x.length);
				}
			} else {
				x = 'are' + x.slice(3, x.length);
			}
		}
		if (plural == false) {
			if (person == 0) {
				result4 = result4 + 'I ';
			} else if (person == 1) {
				result4 = result4 + 'you ';
			} else if (person == 2) {
				result4 = result4 + 'he/she/it '
			}
		} else {
			if (person == 0) {
				result4 = result4 + 'we ';
			} else if (person == 1) {
				result4 = result4 + 'you ';
			} else if (person == 2) {
				result4 = result4 + 'they '
			}
		}
		if (tense == 1) {
			result4 = result4 + x;
		} else if (tense == 2) {
			result4 = result4 + 'will ' + x;
		}
		if (plural == false && person == 2 && tense == 1 && x != 'is' && x.includes('is ') == false && x != 'may' && x != 'must' && x != 'can' && x != 'shall' && x != 'should' && x != 'could' && x != 'might' && x != 'will' && x != 'would') {
			if (x == 'go' || x == 'do') {
				result4 = result4 + 'es';
			} else if (x == 'have') {
				result4 = 'he/she/it has'
			} else if (x == 'have to') {
				result4 = 'he/she/it has to'
			} else {
				result4 = result4 + 's';
			}
		}
		return(result4);
}
function retransfun(revsubmit) {
	document.getElementById("wordinput").value = revsubmit;
	starttrans();
}
function revtransfun(revsubmit) {
	document.getElementById("wordinput").value = revsubmit;
	switchdir();
}
