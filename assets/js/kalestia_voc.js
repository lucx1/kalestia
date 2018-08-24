var getVocabularyVar = 0;
var VocabularyList = [ //Kalestia words in Romanized form
	"niu", //k0
	"enu", //k1
	"ilia", //k2
	"zel", //k3
	"si", //k4
	"neli", //k5
	"fek", //k6
	"ek", //k7
	"seli", //k8
	"selin", //k9
	"al", //k10
	"nelo", //k11
	"le" //k12
];
var VocabularyReturn = "null";
var VocabularyKalLetter = [ //Kalestia words written in its letters (using svg vector files)
	"lorem", //l0
	"ipsum", //l1
	"dolor" //l2
]
var KalLetterReturn = "null";
var VocabularyTransEN_US = [ //English translations
	"no, not", //EN_US0
	"yes", //EN_US1
	"hello", //EN_US2
	"one", //EN_US3
	"two",//EN_US4
	"three", //EN_US5
	"four", //EN_US6
	"five", //EN_US7
	"six", //EN_US8
	"seven", //EN_US9
	"eight", //EN_US10
	"nine", //EN_US11
	"ten" //EN_US12
]
var TransEN_USReturn = "null";
var VocabularyDef = [ //Definitions
	"lorem ipsum", //d0
	"dolor", //d1
	"sit erat" //d2
]
var DefReturn = "null";
var VocabularyEx = [ //Example sentences
	"lorem ipsum", //e0
	"dolor", //e1
	"erat" //e2
]
var ExReturn = "null";
function getVocabularyFunction() {
	VocabularyReturn = VocabularyList[getVocabularyVar];
	KalLetterReturn = VocabularyKalLetter[getVocabularyVar];
	TransEN_USReturn = VocabularyTransEN_US[getVocabularyVar];
	DefReturn = VocabularyDef[getVocabularyVar];
	ExReturn = VocabularyEx[getVocabularyVar];
}