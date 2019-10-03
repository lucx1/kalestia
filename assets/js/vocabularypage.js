var englishsort = englishvoc.slice(0);
var kalestiasort = kalestiavoc.slice(0);
englishsort.sort((a,b)=>a[0].localeCompare(b[0]));
kalestiasort.sort((a,b)=>a[0].localeCompare(b[0]));
var diclans = new Array();
var dicdir = 0;
switchdicdir();
function builddictionary() {
	document.getElementById("letternav").innerHTML = "";
	var maindivvar = "<section class='main'>Dictionary from " + diclans[0] + " to " + diclans[1] + " <input type='button' value='Switch direction' onClick='switchdicdir()' class='button special'></section>";
	var i = 0;
	var firstchar = 97;
	var wnum = 0;
	var wordtype = "";
	var transnum = 0;
	var continueloop = false;
	var wentthrough = false;
	if (dicdir == 1) {
		do {
			if (englishsort[i][0].charAt(0) == String.fromCharCode(firstchar) || englishsort[i][0].charAt(0) == String.fromCharCode(firstchar - 32)) {
				maindivvar = maindivvar + "<section id='letter" + String.fromCharCode(firstchar) + "' class='main'><h2>" + String.fromCharCode(firstchar - 32) + "</h2><table><tr style='font-weight: bold;'><td>" + diclans[0] + "</td><td>Word type</td><td>" + diclans[1] + "</td></tr>";
				document.getElementById("letternav").innerHTML = document.getElementById("letternav").innerHTML + "<li><a href='#letter" + String.fromCharCode(firstchar) + "'>" + String.fromCharCode(firstchar - 32) + "</a></li>";
				wentthrough = true;
				do {
					wnum = englishsort[i][2];
					if (wnum == 0) {
						wordtype = "Noun";
					} else if (wnum == 1) {
						wordtype = "Verb";
					} else if (wnum == 2) {
						wordtype = "Adjective";
					} else if (wnum == 3) {
						wordtype = "Pronoun";
					} else if (wnum == 4) {
						wordtype = "Nummeral";
					} else if (wnum == 5) {
						wordtype = "Conjunction";
					} else if (wnum == 6) {
						wordtype = "Adverb";
					} else if (wnum == 7) {
						wordtype = "Interjection";
					} else if (wnum == 8) {
						wordtype = "Prepositon"
					}
					transnum = englishsort[i][1].length - 1;
					var transvar = "";
					var transtext = "loremipsum";
					do {
						transvar = kalestiavoc[englishsort[i][1][transnum]][0];
						if (transtext == "loremipsum") {
							transtext = transvar;
						} else {
							transtext = transtext + ", " + transvar;
						}
						transnum--;
					} while (transnum > -1);
					maindivvar = maindivvar + "<tr><td>" + englishsort[i][0] + "</td><td>" + wordtype + "</td><td>" + transtext + "</td></tr>";
					i++;
					if (i == englishsort.length) {
						continueloop = false;
					} else if (englishsort[i][0].charAt(0) == String.fromCharCode(firstchar)) {
						continueloop = true;
					} else {
						continueloop = false;
					}
				} while (continueloop == true);
			}
			if (wentthrough == true) {
				maindivvar = maindivvar + "</table></section>";
			}
			wentthrough = false;
			firstchar++;
		} while (i < englishsort.length);
	} else {
		do {
			if (kalestiasort[i][0].charAt(0) == String.fromCharCode(firstchar) || kalestiasort[i][0].charAt(0) == String.fromCharCode(firstchar - 32)) {
				maindivvar = maindivvar + "<section id='letter" + String.fromCharCode(firstchar) + "' class='main'><h2>" + String.fromCharCode(firstchar - 32) + "</h2><table><tr style='font-weight: bold;'><td>" + diclans[0] + "</td><td>Word type</td><td>" + diclans[1] + "</td></tr>";
				document.getElementById("letternav").innerHTML = document.getElementById("letternav").innerHTML + "<li><a href='#letter" + String.fromCharCode(firstchar) + "'>" + String.fromCharCode(firstchar - 32) + "</a></li>";
				wentthrough = true;
				do {
					wnum = kalestiasort[i][2];
					if (wnum == 0) {
						wordtype = "Noun";
					} else if (wnum == 1) {
						wordtype = "Verb";
					} else if (wnum == 2) {
						wordtype = "Adjective";
					} else if (wnum == 3) {
						wordtype = "Pronoun";
					} else if (wnum == 4) {
						wordtype = "Nummeral";
					} else if (wnum == 5) {
						wordtype = "Conjunction";
					} else if (wnum == 6) {
						wordtype = "Adverb";
					} else if (wnum == 7) {
						wordtype = "Interjection";
					} else if (wnum == 8) {
						wordtype = "Prepositon"
					}
					transnum = kalestiasort[i][1].length - 1;
					var transvar = "";
					var transtext = "loremipsum";
					do {
						transvar = englishvoc[kalestiasort[i][1][transnum]][0];
						if (transtext == "loremipsum") {
							transtext = transvar;
						} else {
							transtext = transtext + ", " + transvar;
						}
						transnum--;
					} while (transnum > -1);
					maindivvar = maindivvar + "<tr><td>" + kalestiasort[i][0] + "</td><td>" + wordtype + "</td><td>" + transtext + "</td></tr>";
					i++;
					if (i == kalestiasort.length) {
						continueloop = false;
					} else if (kalestiasort[i][0].charAt(0) == String.fromCharCode(firstchar)) {
						continueloop = true;
					} else {
						continueloop = false;
					}
				} while (continueloop == true);
			}
			if (wentthrough == true) {
				maindivvar = maindivvar + "</table></section>";
			}
			wentthrough = false;
			firstchar++;
		} while (i < kalestiasort.length);
	}
	document.getElementById("main").innerHTML = maindivvar;
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src= '../assets/js/main.js';
    head.appendChild(script);
}
function switchdicdir() {
	if (dicdir == 0) {
		diclans = ["English", "Kalestia"];
		dicdir = 1;
	} else {
		diclans = ["Kalestia", "English"];
		dicdir = 0;
	}
	builddictionary();
}
