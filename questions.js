const quizDataFromFile = [
  {
    "question": "the view",
    "correct": "der Blick",
    "choices": [
      "feststellen",
      "einsinken",
      "der Blick",
      "der Nutzer"
    ]
  },
  {
    "question": "the competition",
    "correct": "der Wettbewerb",
    "choices": [
      "die Übersicht",
      "der Wettbewerb",
      "die Gehaltsverhandlung",
      "die&nbsp;Einfallslosigkeit"
    ]
  },
  {
    "question": "the jury",
    "correct": "die Jury",
    "choices": [
      "die Jury",
      "nix",
      "stiften",
      "rechtzeitig"
    ]
  },
  {
    "question": "the award, recognition",
    "correct": "die Anerkennung",
    "choices": [
      "ansteckend",
      "die Anerkennung",
      "zum Teil",
      "Prüfung ablegen"
    ]
  },
  {
    "question": "the bear",
    "correct": "der Bär",
    "choices": [
      "der Bär",
      "etwa",
      "sich halten an",
      "nachfolgend"
    ]
  },
  {
    "question": "the temporary help",
    "correct": "die Aushilfe",
    "choices": [
      "beleuchten",
      "der Anteil",
      "das Murmeltier",
      "die Aushilfe"
    ]
  },
  {
    "question": "be certain",
    "correct": "feststehen",
    "choices": [
      "schrumpfen",
      "Interessen und Vorlieben",
      "feststehen",
      "berechnend"
    ]
  },
  {
    "question": "what do you think of the idea?",
    "correct": "was hältst du von der Idee?",
    "choices": [
      "die Verweigerung",
      "was hältst du von der Idee?",
      "stammen aus",
      "die Verhinderung"
    ]
  },
  {
    "question": "occur",
    "correct": "stattfinden",
    "choices": [
      "der Zuwanderer",
      "die Silbe",
      "stattfinden",
      "das Unwetter"
    ]
  },
  {
    "question": "take on, receive responsibility of a task",
    "correct": "übernehmen",
    "choices": [
      "der Sprung schaffen",
      "übernehmen",
      "der Maßstab",
      "verlaufen"
    ]
  },
  {
    "question": "organize",
    "correct": "veranstalten",
    "choices": [
      "veranstalten",
      "ausschlaggebend",
      "nachweisbar",
      "einstimmen"
    ]
  },
  {
    "question": "happen as a result of",
    "correct": "erfolgen",
    "choices": [
      "revolutionieren",
      "das Selbstvertrauen",
      "erfolgen",
      "die Überstunde"
    ]
  },
  {
    "question": "the measure",
    "correct": "die Maßnahme",
    "choices": [
      "die Maßnahme",
      "festschreiben",
      "aufteilen",
      "der Malerbetrieb"
    ]
  },
  {
    "question": "the box",
    "correct": "der Kasten",
    "choices": [
      "die Gegenwart",
      "der Kasten",
      "der Extremfall",
      "der Phönizier"
    ]
  },
  {
    "question": "the social envy",
    "correct": "der Sozialneid",
    "choices": [
      "sich mit jemandem vertragen",
      "tagtäglich",
      "der Sozialneid",
      "der Clown"
    ]
  },
  {
    "question": "the timidity",
    "correct": "die Zaghaftigkeit",
    "choices": [
      "das Umdenken",
      "der Anmarsch",
      "das Bergsteigen",
      "die Zaghaftigkeit"
    ]
  },
  {
    "question": "the serenity",
    "correct": "die Gelassenheit",
    "choices": [
      "sich versetzen an jemands Lage",
      "verschweigen",
      "die Gelassenheit",
      "der Gutschein"
    ]
  },
  {
    "question": "the fighting spirit",
    "correct": "der Kampfgeist",
    "choices": [
      "die Rollenverteilung",
      "der Kampfgeist",
      "tüfteln",
      "auf die kumpelhafte Art"
    ]
  },
  {
    "question": "lack",
    "correct": "mangeln",
    "choices": [
      "mangeln",
      "undenkbar",
      "unterschiedlich",
      "jobben"
    ]
  },
  {
    "question": "the projecting",
    "correct": "das Projektieren",
    "choices": [
      "der Werbetext",
      "das Projektieren",
      "straffällig gewordene Jugendliche",
      "der Reiz"
    ]
  },
  {
    "question": "rational",
    "correct": "rational",
    "choices": [
      "rational",
      "der Zeitgenosse",
      "das System",
      "verkürzt"
    ]
  },
  {
    "question": "the corporate culture",
    "correct": "die Unternehmenskultur",
    "choices": [
      "großartig",
      "erfolgen",
      "die Hansestadt",
      "die Unternehmenskultur"
    ]
  },
  {
    "question": "the identity",
    "correct": "die Identität",
    "choices": [
      "der Schluchzer",
      "halb- oder ganztägig",
      "die Identität",
      "die Latte"
    ]
  },
  {
    "question": "cope, handle",
    "correct": "zurechtkommen",
    "choices": [
      "zerstören",
      "zurechtkommen",
      "inflationär",
      "erfahren"
    ]
  },
  {
    "question": "the failure",
    "correct": "das Scheitern",
    "choices": [
      "scherzhaft",
      "der Charmeur",
      "das Scheitern",
      "das Fach"
    ]
  },
  {
    "question": "the option",
    "correct": "die Option",
    "choices": [
      "die Ausspannung",
      "der Wachtmeister",
      "anfügen",
      "die Option"
    ]
  },
  {
    "question": "the fellow student",
    "correct": "der Kommilitone",
    "choices": [
      "der Kommilitone",
      "der Ausblick",
      "leisten",
      "die handelnde Personen"
    ]
  },
  {
    "question": "slow down",
    "correct": "ausbremsen",
    "choices": [
      "der Hörsaal",
      "sich geben",
      "ausbremsen",
      "befreundet"
    ]
  },
  {
    "question": "the foreigners rate",
    "correct": "die Ausländerquote",
    "choices": [
      "funkeln",
      "die Ausländerquote",
      "das Boxen",
      "anwenden"
    ]
  },
  {
    "question": "accepted",
    "correct": "anerkannt",
    "choices": [
      "absetzen",
      "die Überstunde",
      "anerkannt",
      "die Neugier"
    ]
  },
  {
    "question": "recognize, acknowledge",
    "correct": "anerkennen",
    "choices": [
      "motivierend",
      "treu",
      "anerkennen",
      "verschonen"
    ]
  },
  {
    "question": "occasionally",
    "correct": "gelegentlich",
    "choices": [
      "gelegentlich",
      "die Prävention",
      "das Randalieren",
      "das Schluchzen"
    ]
  },
  {
    "question": "the pension",
    "correct": "die Rente",
    "choices": [
      "die Rente",
      "die Voraussetzung",
      "einleben",
      "der Wanderarbeiter"
    ]
  },
  {
    "question": "tear",
    "correct": "zerreißen",
    "choices": [
      "zerreißen",
      "brutto",
      "die Ausländerquote",
      "das Erbe"
    ]
  },
  {
    "question": "torn, disunited",
    "correct": "zerrissen",
    "choices": [
      "zerrissen",
      "die Nachbarabteilung",
      "der Geschmack",
      "das Ereignis"
    ]
  },
  {
    "question": "come from",
    "correct": "stammen aus",
    "choices": [
      "man spricht davon ...",
      "großartig",
      "stammen aus",
      "der Zuwanderer"
    ]
  },
  {
    "question": "the protection",
    "correct": "der Schutz",
    "choices": [
      "der Schutz",
      "authentisch",
      "verrichten",
      "durch"
    ]
  },
  {
    "question": "pensive, thoughtful",
    "correct": "nachdenklich",
    "choices": [
      "freiwillig",
      "der Arbeitskollege",
      "nachdenklich",
      "berechnen"
    ]
  },
  {
    "question": "add",
    "correct": "anfügen",
    "choices": [
      "anfügen",
      "der Sprung schaffen",
      "die Schulreife",
      "demotivierend"
    ]
  },
  {
    "question": "the discrimination",
    "correct": "die Diskriminierung",
    "choices": [
      "referieren",
      "verhalten",
      "portionieren",
      "die Diskriminierung"
    ]
  },
  {
    "question": "the self-confidence",
    "correct": "das Selbstbewusstsein",
    "choices": [
      "inmitten",
      "anerkennen",
      "das Selbstbewusstsein",
      "andocken"
    ]
  },
  {
    "question": "the business administration",
    "correct": "die Betriebswirtschaft",
    "choices": [
      "wegschwemmen",
      "der Hintergrund&nbsp;",
      "Beeinträchtigung",
      "die Betriebswirtschaft"
    ]
  },
  {
    "question": "the cookie",
    "correct": "der Keks",
    "choices": [
      "die Einschränkung",
      "das Nickerchen",
      "der Ganzkörpereinsatz",
      "der Keks"
    ]
  },
  {
    "question": "the firewood",
    "correct": "das Feuerholz",
    "choices": [
      "der Gram",
      "die Erleichterung",
      "sich bezeichnen als ...",
      "das Feuerholz"
    ]
  },
  {
    "question": "the suitability analysis",
    "correct": "die Eignungsanalyse",
    "choices": [
      "aufeinandertreffen",
      "die Eignungsanalyse",
      "die Geschwindigkeit",
      "übernehmen"
    ]
  },
  {
    "question": "run through, run without stopping",
    "correct": "durchlaufen",
    "choices": [
      "allermeist",
      "durchlaufen",
      "das Murmeltier",
      "selten"
    ]
  },
  {
    "question": "moreover",
    "correct": "zudem",
    "choices": [
      "zudem",
      "betrachten",
      "bettelarm",
      "die Disziplin"
    ]
  },
  {
    "question": "the transition",
    "correct": "der Übergang",
    "choices": [
      "der Übergang",
      "indem",
      "jede Menge",
      "die Umschulung"
    ]
  },
  {
    "question": "to be used",
    "correct": "zum Einsatz kommen",
    "choices": [
      "zum Einsatz kommen",
      "oberflächlich",
      "vermissen",
      "das Virus"
    ]
  },
  {
    "question": "the exclusion",
    "correct": "die Ausgrenzung",
    "choices": [
      "überraschend",
      "klären",
      "sich zeigen",
      "die Ausgrenzung"
    ]
  },
  {
    "question": "although, in case of",
    "correct": "wenn auch",
    "choices": [
      "von selbst",
      "besagen",
      "durchhalten",
      "wenn auch"
    ]
  },
  {
    "question": "complete",
    "correct": "absolvieren",
    "choices": [
      "der Betrüger",
      "der Heiratsschwindel",
      "die Erziehungswissenschaft",
      "absolvieren"
    ]
  },
  {
    "question": "expand",
    "correct": "ausweiten",
    "choices": [
      "ausweiten",
      "zögern",
      "jeder",
      "stammen aus"
    ]
  },
  {
    "question": "make easier, facilitate",
    "correct": "erleichtern",
    "choices": [
      "eine Menge",
      "das Frieden",
      "die Abwicklung",
      "erleichtern"
    ]
  },
  {
    "question": "put on, appoint, place",
    "correct": "ansetzen",
    "choices": [
      "es ist allgemein bekannt, dass ...",
      "ansetzen",
      "aufbrechen",
      "herbeiziehen"
    ]
  },
  {
    "question": "the precondition",
    "correct": "die Voraussetzung",
    "choices": [
      "der Wert",
      "viele Leute sind der Meinung, dass ...",
      "spontane Sprachbeherrschung",
      "die Voraussetzung"
    ]
  },
  {
    "question": "the youth club",
    "correct": "der Jugendtreff",
    "choices": [
      "der Gram",
      "die Typenbeschreibung",
      "der Jugendtreff",
      "die Erfindung"
    ]
  },
  {
    "question": "the advice center",
    "correct": "die Beratungsstelle",
    "choices": [
      "die Schwalbe",
      "überschütten",
      "die Beratungsstelle",
      "der Wert"
    ]
  },
  {
    "question": "tolerate",
    "correct": "tolerieren",
    "choices": [
      "tolerieren",
      "freiheitsliebend",
      "der Infarkt",
      "bis auf"
    ]
  },
  {
    "question": "in my opinion",
    "correct": "ich bin der Ansicht",
    "choices": [
      "steinreich",
      "die Belegung",
      "die Längeneinheit",
      "ich bin der Ansicht"
    ]
  },
  {
    "question": "the closing, approach",
    "correct": "die Annäherung",
    "choices": [
      "die Annäherung",
      "die Brauerei",
      "rekonstruieren",
      "durchsprechen"
    ]
  },
  {
    "question": "in my opinion",
    "correct": "meiner Meinung nach ist ...",
    "choices": [
      "überlegt",
      "nachdenklich",
      "meiner Meinung nach ist ...",
      "verschränken"
    ]
  },
  {
    "question": "so to say",
    "correct": "quasi",
    "choices": [
      "die Notkühlung",
      "das Lachen&nbsp;",
      "quasi",
      "die Arbeitstechnik"
    ]
  },
  {
    "question": "neutralize",
    "correct": "entschärfen",
    "choices": [
      "tätig",
      "der Vorgang",
      "entschärfen",
      "das Indiz"
    ]
  },
  {
    "question": "mutual, each other",
    "correct": "gegenseitig",
    "choices": [
      "gegenseitig",
      "der Gestank",
      "KaDeWe",
      "belegen"
    ]
  },
  {
    "question": "job-related",
    "correct": "berufsbezogen",
    "choices": [
      "sich qualifizieren zu",
      "der Rabe",
      "berufsbezogen",
      "demselben"
    ]
  },
  {
    "question": "be of importance",
    "correct": "von Bedeutung sein",
    "choices": [
      "vertreten",
      "von Bedeutung sein",
      "die Ausgrenzung",
      "entfalten"
    ]
  },
  {
    "question": "There should be",
    "correct": "es sollte geben",
    "choices": [
      "die&nbsp;Streckenlänge",
      "spinnen",
      "der Kontrolleur",
      "es sollte geben"
    ]
  },
  {
    "question": "enough",
    "correct": "genügend",
    "choices": [
      "in der Regel, gewöhnlich",
      "genügend",
      "der Werbeslogan",
      "herrlich"
    ]
  },
  {
    "question": "primary school",
    "correct": "die Grundschule",
    "choices": [
      "die Laus",
      "der Laborant",
      "hofieren",
      "die Grundschule"
    ]
  },
  {
    "question": "deal with",
    "correct": "auseinandersetzen",
    "choices": [
      "auseinandersetzen",
      "zweifelsfrei",
      "der Teilbereich",
      "der Verlobter"
    ]
  },
  {
    "question": "ask around",
    "correct": "umhören",
    "choices": [
      "der Zirkus",
      "umhören",
      "jemanden für sich einnehmen",
      "die Runde"
    ]
  },
  {
    "question": "the delimitation, differentiation",
    "correct": "die Abgrenzung",
    "choices": [
      "der Brummschädel",
      "vererben",
      "herb",
      "die Abgrenzung"
    ]
  },
  {
    "question": "critical",
    "correct": "entscheidend",
    "choices": [
      "die Beratungsstelle",
      "runterkommen",
      "entscheidend",
      "geschickt"
    ]
  },
  {
    "question": "the prevention",
    "correct": "die Verhinderung",
    "choices": [
      "verständnisvoll",
      "die Verhinderung",
      "abwegig",
      "relevant"
    ]
  },
  {
    "question": "overcoming",
    "correct": "die Überwindung",
    "choices": [
      "die Überwindung",
      "feststehen",
      "die Abstellkammer",
      "der Tscheche"
    ]
  },
  {
    "question": "the effort",
    "correct": "die Bemühung",
    "choices": [
      "die Kreativität",
      "die Bemühung",
      "gewalttätig",
      "das Fazit"
    ]
  },
  {
    "question": "thus",
    "correct": "somit",
    "choices": [
      "somit",
      "bewirken",
      "der Drehbuchautor",
      "die Gemeinschaft"
    ]
  },
  {
    "question": "always been",
    "correct": "jeher",
    "choices": [
      "der Keks",
      "der Cartoon",
      "nachahmen",
      "jeher"
    ]
  },
  {
    "question": "the share, amount",
    "correct": "der Anteil",
    "choices": [
      "die Frechheit",
      "proben",
      "der Anteil",
      "die Leistungsfähigkeit"
    ]
  },
  {
    "question": "have pity on",
    "correct": "Mitleid haben mit",
    "choices": [
      "speziell",
      "Mitleid haben mit",
      "der Kegel",
      "beleuchten"
    ]
  },
  {
    "question": "start",
    "correct": "starten",
    "choices": [
      "starten",
      "der Produzent",
      "überschütten",
      "vorlesen"
    ]
  },
  {
    "question": "be common",
    "correct": "üblich sein",
    "choices": [
      "unerlässlich",
      "die Feuersirene",
      "die Vielzahl",
      "üblich sein"
    ]
  },
  {
    "question": "make clear",
    "correct": "klarmachen",
    "choices": [
      "zurückhaltend",
      "klarmachen",
      "dadurch",
      "etwas zu tun haben mit"
    ]
  },
  {
    "question": "in a manner that",
    "correct": "sodass",
    "choices": [
      "sodass",
      "stöhnen",
      "steinreich",
      "demselben"
    ]
  },
  {
    "question": "be crazy",
    "correct": "spinnen",
    "choices": [
      "nachschlagen",
      "spinnen",
      "der Muttersprachler",
      "hin- und herspringen"
    ]
  },
  {
    "question": "be crazy",
    "correct": "spinnt",
    "choices": [
      "spinnt",
      "die Schüchternheit",
      "selten",
      "das Weibchen"
    ]
  },
  {
    "question": "annoy",
    "correct": "nerven",
    "choices": [
      "steinreich",
      "nerven",
      "die Männerdomäne",
      "der Atommeiler"
    ]
  },
  {
    "question": "annoyed",
    "correct": "genervt",
    "choices": [
      "heutzutage",
      "schluchzen",
      "genervt",
      "führend"
    ]
  },
  {
    "question": "obvious, visibly",
    "correct": "sichtlich",
    "choices": [
      "etwas in Angriff nehmen",
      "die Gravitation",
      "sichtlich",
      "das Grundrecht"
    ]
  },
  {
    "question": "the hand signal",
    "correct": "das Handzeichen",
    "choices": [
      "die Rollenverteilung",
      "Ich halte dich für ...",
      "die Nachbereitung",
      "das Handzeichen"
    ]
  },
  {
    "question": "lay down",
    "correct": "hinlegen",
    "choices": [
      "ausgewanderte Wörter",
      "hinlegen",
      "grübeln",
      "die Anwesenheit"
    ]
  },
  {
    "question": "give to understand",
    "correct": "zu verstehen geben",
    "choices": [
      "undeutlich",
      "die Orientierung",
      "voranstellen",
      "zu verstehen geben"
    ]
  },
  {
    "question": "disrespectful",
    "correct": "respektlos",
    "choices": [
      "die Scheu",
      "das Niedersachsen",
      "respektlos",
      "die Nachfrage"
    ]
  },
  {
    "question": "the running around",
    "correct": "das Rumrennen",
    "choices": [
      "der Bestandteil",
      "das Rumrennen",
      "somit",
      "tröstlich"
    ]
  },
  {
    "question": "running around",
    "correct": "das Rumlaufen",
    "choices": [
      "das Rumlaufen",
      "die Notlüge",
      "gebräuchlich",
      "vertraute Umgebung"
    ]
  },
  {
    "question": "touch",
    "correct": "anfassen",
    "choices": [
      "umsetzen",
      "ich vertrete den Standpunkt, dass ...",
      "anfassen",
      "die Faustregel"
    ]
  },
  {
    "question": "the bowl",
    "correct": "der Napf",
    "choices": [
      "der Radiobeitrag",
      "ergeben",
      "der Napf",
      "derer"
    ]
  },
  {
    "question": "confused",
    "correct": "verwirrt",
    "choices": [
      "verwirrt",
      "installieren",
      "die Übertragung",
      "verdrahten"
    ]
  },
  {
    "question": "Well",
    "correct": "Tja",
    "choices": [
      "die Einschränkung",
      "sich an etwas aufreiben",
      "Tja",
      "die Schande"
    ]
  },
  {
    "question": "turn out, emerge",
    "correct": "sich herausstellen",
    "choices": [
      "nachdenklich",
      "sich herausstellen",
      "die Qualität",
      "auf der Arbeit"
    ]
  },
  {
    "question": "be thrilled, enthusiastic",
    "correct": "begeistert sein von + D",
    "choices": [
      "das Feuilleton",
      "restriktiv",
      "zanken",
      "begeistert sein von + D"
    ]
  },
  {
    "question": "stand around",
    "correct": "rumstehen",
    "choices": [
      "funkeln",
      "rumstehen",
      "die Schwelle",
      "debütieren"
    ]
  },
  {
    "question": "easy going, loose",
    "correct": "locker",
    "choices": [
      "locker",
      "krönender Abschluss",
      "neulich erst",
      "ausgedient"
    ]
  },
  {
    "question": "system",
    "correct": "das System",
    "choices": [
      "das System",
      "aussterben",
      "nix",
      "die&nbsp;Bürokauffrau"
    ]
  },
  {
    "question": "belittling",
    "correct": "abwertend",
    "choices": [
      "sich liegen",
      "abwertend",
      "hängende Mundwinkel",
      "verraten"
    ]
  },
  {
    "question": "to belittle",
    "correct": "abwerten",
    "choices": [
      "vertraute Umgebung",
      "gewaltsam",
      "abwerten",
      "widmen"
    ]
  },
  {
    "question": "be in doubt",
    "correct": "geteilter Meinung sein",
    "choices": [
      "geteilter Meinung sein",
      "erreichen",
      "auf die kumpelhafte Art",
      "seitdem"
    ]
  },
  {
    "question": "explorer",
    "correct": "der Forscher",
    "choices": [
      "der Forscher",
      "der Nutzer",
      "da",
      "rational"
    ]
  },
  {
    "question": "reflect",
    "correct": "widerspiegeln",
    "choices": [
      "der Radsport",
      "feststehen",
      "widerspiegeln",
      "lügnerisch"
    ]
  },
  {
    "question": "striver",
    "correct": "der Streber",
    "choices": [
      "flach",
      "die Rückkehr",
      "diejenigen",
      "der Streber"
    ]
  },
  {
    "question": "pay for",
    "correct": "spendieren",
    "choices": [
      "bevorzugen",
      "der Zeitmangel",
      "nachgewiesen",
      "spendieren"
    ]
  },
  {
    "question": "citizen of Finland",
    "correct": "der Finne",
    "choices": [
      "zerrinnen",
      "die Anforderung",
      "aufbinden",
      "der Finne"
    ]
  },
  {
    "question": "Czech",
    "correct": "der Tscheche",
    "choices": [
      "die Hysterie",
      "murmeln",
      "organisatorisch",
      "der Tscheche"
    ]
  },
  {
    "question": "to doubt",
    "correct": "bezweifeln",
    "choices": [
      "bezweifeln",
      "verwandeln",
      "gehoben",
      "die Bank"
    ]
  },
  {
    "question": "I agree with you",
    "correct": "ich stimme dir zu",
    "choices": [
      "anhand eines Beispiels",
      "einsperren",
      "durchschauen",
      "ich stimme dir zu"
    ]
  },
  {
    "question": "by means of",
    "correct": "anhand",
    "choices": [
      "zahlreich",
      "die Unternehmenskultur",
      "anhand",
      "höflich"
    ]
  },
  {
    "question": "catch up on, fetch",
    "correct": "nachholen",
    "choices": [
      "nachholen",
      "starten",
      "ich bin anderer Meinung als",
      "das Verkaufsgespräch"
    ]
  },
  {
    "question": "standard required for university admittance",
    "correct": "die Hochschulreife",
    "choices": [
      "durchschauen",
      "die Hochschulreife",
      "der Atommeiler",
      "der Gepard"
    ]
  },
  {
    "question": "in addition, besides",
    "correct": "nebenbei",
    "choices": [
      "beunruhigen",
      "der Einklang",
      "nebenbei",
      "die Abstammung"
    ]
  },
  {
    "question": "to question about something",
    "correct": "etwas infrage stellen",
    "choices": [
      "dick (freund)",
      "etwas infrage stellen",
      "erwerben",
      "das Verantwortungsbewusstsein"
    ]
  },
  {
    "question": "what you think of ...",
    "correct": "was hältst du von der Idee ...",
    "choices": [
      "für etwas gerade stehen",
      "ich bin der Ansicht",
      "der Personalchef",
      "was hältst du von der Idee ..."
    ]
  },
  {
    "question": "I suggest",
    "correct": "ich könnte mir vorstellen, dass",
    "choices": [
      "die Schlafmütze",
      "das Weltbild",
      "ich könnte mir vorstellen, dass",
      "steinreich"
    ]
  },
  {
    "question": "how is if ...",
    "correct": "wie wär's, wenn ...",
    "choices": [
      "besetzen",
      "wie wär's, wenn ...",
      "schief",
      "anregend"
    ]
  },
  {
    "question": "dealing with ...",
    "correct": "eingehen auf + A",
    "choices": [
      "erstellen",
      "die Ausländerquote",
      "eingehen auf + A",
      "der Proberaum"
    ]
  },
  {
    "question": "portrait",
    "correct": "das Porträt",
    "choices": [
      "das Porträt",
      "somit",
      "locken",
      "weitestgehend"
    ]
  },
  {
    "question": "published, made publicly known, issued",
    "correct": "veröffentlicht",
    "choices": [
      "veröffentlicht",
      "das Unternehmen",
      "harmonisch",
      "gönnen"
    ]
  },
  {
    "question": "publish, promulgate",
    "correct": "veröffentlichen",
    "choices": [
      "veröffentlichen",
      "harmoniesüchtig",
      "gelogen",
      "aufbauen"
    ]
  },
  {
    "question": "organizationally",
    "correct": "organisatorisch",
    "choices": [
      "organisatorisch",
      "eingeschüchtert",
      "das Vermögen",
      "herausgreifen"
    ]
  },
  {
    "question": "movie actor",
    "correct": "der Darsteller",
    "choices": [
      "der Überfluss",
      "berufsbezogen",
      "der Darsteller",
      "indem"
    ]
  },
  {
    "question": "lively, spirited",
    "correct": "temperamentvoll",
    "choices": [
      "die Bibliothek",
      "nachweisbar",
      "beitragen zu + D",
      "temperamentvoll"
    ]
  },
  {
    "question": "emerge, come from",
    "correct": "hervorgehen",
    "choices": [
      "bis auf",
      "die Feldtheorie",
      "was hältst du von der Idee?",
      "hervorgehen"
    ]
  },
  {
    "question": "award-winning",
    "correct": "preisgekrönt",
    "choices": [
      "preisgekrönt",
      "die Disziplin",
      "das Pro",
      "die Tuschelei"
    ]
  },
  {
    "question": "thriller",
    "correct": "der Thriller",
    "choices": [
      "aufrichtig",
      "die Arbeitslosenquote",
      "der Thriller",
      "die Auswertung"
    ]
  },
  {
    "question": "continue",
    "correct": "weiterführen",
    "choices": [
      "das Asyl",
      "abschießen",
      "weiterführen",
      "die Einstellung"
    ]
  },
  {
    "question": "building [or construction] trade",
    "correct": "das Baugewerbe",
    "choices": [
      "das Baugewerbe",
      "nix",
      "erleichtern",
      "die Vertragsgestaltung"
    ]
  },
  {
    "question": "slow",
    "correct": "schleppend",
    "choices": [
      "je",
      "festlegen",
      "schief",
      "schleppend"
    ]
  },
  {
    "question": "sale",
    "correct": "der Vertrieb",
    "choices": [
      "jenes",
      "erlernt",
      "der Vertrieb",
      "restriktiv"
    ]
  },
  {
    "question": "to tempt",
    "correct": "locken",
    "choices": [
      "die Leistungsfähigkeit",
      "locken",
      "die Gesprächseröffnung",
      "auf der anderen Seite"
    ]
  },
  {
    "question": "move close together",
    "correct": "zusammenrücken",
    "choices": [
      "zusammenrücken",
      "die Ungerechtigkeit",
      "verneinen",
      "man spricht davon ..."
    ]
  },
  {
    "question": "space for storing goods",
    "correct": "die Abstellkammer",
    "choices": [
      "die Rückkehr",
      "sich halten an",
      "ehrenamtlich",
      "die Abstellkammer"
    ]
  },
  {
    "question": "real-estate broker",
    "correct": "Immobilienmakler",
    "choices": [
      "klatschend",
      "die Untauglichkeit",
      "Immobilienmakler",
      "der Einblick"
    ]
  },
  {
    "question": "fulfillment",
    "correct": "die Erfüllung",
    "choices": [
      "die Erfüllung",
      "die Garnele",
      "aufbinden",
      "die Vision"
    ]
  },
  {
    "question": "convince",
    "correct": "sich überzeugen von + D &nbsp;",
    "choices": [
      "berufsbezogen",
      "lexikalisch",
      "sich überzeugen von + D &nbsp;",
      "der Vorstoß"
    ]
  },
  {
    "question": "evening or autumn of one's life",
    "correct": "der Lebensabend",
    "choices": [
      "die Verkaufsförderung",
      "die Sitte",
      "der Lebensabend",
      "der Kontrolleur"
    ]
  },
  {
    "question": "to fulfill",
    "correct": "erfüllen",
    "choices": [
      "hochwerfen",
      "nachgeben",
      "der Planet",
      "erfüllen"
    ]
  },
  {
    "question": "rarely",
    "correct": "selten",
    "choices": [
      "auswerten",
      "selten",
      "in diesem Zusammenhang",
      "unkontrollierbare Sucht"
    ]
  },
  {
    "question": "income",
    "correct": "das Einkommen",
    "choices": [
      "das Einkommen",
      "der Kampfgeist",
      "übertreiben",
      "wie vorher"
    ]
  },
  {
    "question": "restriction",
    "correct": "die Enge",
    "choices": [
      "mittlerweile",
      "unheimlich",
      "widerstehen",
      "die Enge"
    ]
  },
  {
    "question": "relevancy, relatedness, belonging&nbsp;",
    "correct": "die Zugehörigkeit",
    "choices": [
      "begeistert sein von + D",
      "die Zeit ist um",
      "die Zugehörigkeit",
      "die Einstellung"
    ]
  },
  {
    "question": "profound closeness, familiarness, state of being well-known",
    "correct": "die Vertrautheit",
    "choices": [
      "erzeugen",
      "ungeschickt",
      "die Vertrautheit",
      "möglicherweise"
    ]
  },
  {
    "question": "contradictory, opposing",
    "correct": "widersprüchlich",
    "choices": [
      "widersprüchlich",
      "antreten",
      "das Bündnis",
      "das Zutrauen"
    ]
  },
  {
    "question": "act of coming back",
    "correct": "die Rückkehr",
    "choices": [
      "hinlegen",
      "schnappen",
      "der Liegestütz",
      "die Rückkehr"
    ]
  },
  {
    "question": "anyone",
    "correct": "jeder",
    "choices": [
      "bewerten",
      "schütteln",
      "jeder",
      "gegenüberstehen"
    ]
  },
  {
    "question": "in fact",
    "correct": "eigentlich",
    "choices": [
      "die These",
      "das Ärmelkanal",
      "anlegen",
      "eigentlich"
    ]
  },
  {
    "question": "beckon, signal",
    "correct": "winken",
    "choices": [
      "temperamentvoll",
      "der Reichtum",
      "ansprechen",
      "winken"
    ]
  },
  {
    "question": "night after night, for nights",
    "correct": "nächtelang",
    "choices": [
      "nächtelang",
      "die Angabe",
      "bezweifeln",
      "die Forderung"
    ]
  },
  {
    "question": "let",
    "correct": "lassen",
    "choices": [
      "der Ausblick",
      "vier Wände",
      "bestätigen",
      "lassen"
    ]
  },
  {
    "question": "establish, define",
    "correct": "festlegen",
    "choices": [
      "lebenswichtig, unerläßig",
      "die Intonation",
      "festlegen",
      "das Gerede"
    ]
  },
  {
    "question": "to have fear",
    "correct": "grauen",
    "choices": [
      "grauen",
      "zerbrechen",
      "der Tadel",
      "der Senior"
    ]
  },
  {
    "question": "become reconciled; make it up",
    "correct": "sich miteinander versöhnen",
    "choices": [
      "sich miteinander versöhnen",
      "erleichtern",
      "ausnutzen",
      "das Murmeltier"
    ]
  },
  {
    "question": "unfinished, imperfect",
    "correct": "fehlend",
    "choices": [
      "feststehen",
      "unbewaffnet",
      "fehlend",
      "möglichst"
    ]
  },
  {
    "question": "benefit",
    "correct": "der Vorteil",
    "choices": [
      "sich auszahlen",
      "der Vorteil",
      "auf einmal",
      "ein Stein im Magen"
    ]
  },
  {
    "question": "win, gain",
    "correct": "abgewinnen",
    "choices": [
      "die Verhinderung",
      "stammeln",
      "anrichten",
      "abgewinnen"
    ]
  },
  {
    "question": "make small talk, chat",
    "correct": "plaudern",
    "choices": [
      "nach deren Ansicht",
      "eingehen auf + A",
      "einstürzen",
      "plaudern"
    ]
  },
  {
    "question": "support, backing",
    "correct": "der Rückhalt",
    "choices": [
      "der Rückhalt",
      "der Wahnsinn",
      "wimmern",
      "spinnen"
    ]
  },
  {
    "question": "place, angle",
    "correct": "der Winkel",
    "choices": [
      "die Konkurrenz",
      "dick (freund)",
      "das Schema",
      "der Winkel"
    ]
  },
  {
    "question": "unbroken, undamaged",
    "correct": "intakt",
    "choices": [
      "einheitlich",
      "um ... gerecht zu werden",
      "anlegen",
      "intakt"
    ]
  },
  {
    "question": "the group of mothers",
    "correct": "die Krappelgruppe",
    "choices": [
      "insbesondere",
      "der Produzent",
      "gelogen",
      "die Krappelgruppe"
    ]
  },
  {
    "question": "sooner, earlier",
    "correct": "eher",
    "choices": [
      "eher",
      "graben",
      "die Krume",
      "der Überfluss"
    ]
  },
  {
    "question": "outweigh, be more important than",
    "correct": "überwiegen",
    "choices": [
      "überwiegen",
      "die Überdosis",
      "dauerhaft",
      "angeblich"
    ]
  },
  {
    "question": "miss, feel absence",
    "correct": "vermissen",
    "choices": [
      "freiheitsliebend",
      "nageln",
      "vermissen",
      "entspannend"
    ]
  },
  {
    "question": "empty space, cavity",
    "correct": "die Lücke",
    "choices": [
      "inflationär",
      "der Bauzeichner",
      "begabt",
      "die Lücke"
    ]
  },
  {
    "question": "time difference",
    "correct": "die Zeitverschiebung",
    "choices": [
      "die Moderation",
      "tatenlos",
      "der Tscheche",
      "die Zeitverschiebung"
    ]
  },
  {
    "question": "to be heard, sound, be",
    "correct": "lauten",
    "choices": [
      "lauten",
      "zwölfeinhalb",
      "die Box",
      "sich aufhalten"
    ]
  },
  {
    "question": "of each other",
    "correct": "voneinander",
    "choices": [
      "voneinander",
      "das Bedürfnis",
      "jemanden für sich einnehmen",
      "die Geste"
    ]
  },
  {
    "question": "catch, get",
    "correct": "erwischen",
    "choices": [
      "erzielen",
      "der Ingwer",
      "erwischen",
      "verweisen auf"
    ]
  },
  {
    "question": "give as a gift, donate",
    "correct": "schenken",
    "choices": [
      "schenken",
      "überreichen",
      "ausgeprägt",
      "anstellen"
    ]
  },
  {
    "question": "voucher, coupon",
    "correct": "der Gutschein",
    "choices": [
      "die Vorlesungszeit",
      "überziehen",
      "antrainieren",
      "der Gutschein"
    ]
  },
  {
    "question": "magazine or newspaper that contains photographs",
    "correct": "der Bildband",
    "choices": [
      "der Bildband",
      "ehrenamtlich",
      "das Selbstbewusstsein",
      "die Verlobte"
    ]
  },
  {
    "question": "limitation",
    "correct": "die Einschränkung",
    "choices": [
      "die Reihenfolge",
      "der Steuerberater",
      "die Einschränkung",
      "die Auffassungsgabe"
    ]
  },
  {
    "question": "useful, functional",
    "correct": "zweckmäßig",
    "choices": [
      "überdauern",
      "zweckmäßig",
      "geschäftlich",
      "ausweglos"
    ]
  },
  {
    "question": "accept, undertake",
    "correct": "übernehmen",
    "choices": [
      "übernehmen",
      "wach",
      "begehen",
      "vergeben"
    ]
  },
  {
    "question": "unchanged",
    "correct": "unverändert",
    "choices": [
      "sowas etwas",
      "ewig",
      "unverändert",
      "wesentlich"
    ]
  },
  {
    "question": "conserve",
    "correct": "bewahren",
    "choices": [
      "die Medienleute",
      "bewahren",
      "neurologisch",
      "plaudern"
    ]
  },
  {
    "question": "contribute, donate",
    "correct": "beitragen zu + D",
    "choices": [
      "der Zeitdruck",
      "beitragen zu + D",
      "zunächst",
      "die Selbstsicherheit"
    ]
  },
  {
    "question": "advertising slogan",
    "correct": "der Werbeslogan",
    "choices": [
      "der Werbeslogan",
      "der Lohn",
      "das Stottern",
      "schulen"
    ]
  },
  {
    "question": "inventation",
    "correct": "die Erfindung",
    "choices": [
      "der Schluchzer",
      "angebracht",
      "die Erfindung",
      "behalten"
    ]
  },
  {
    "question": "replace, deputize",
    "correct": "vertreten",
    "choices": [
      "vertreten",
      "die Verweigerung",
      "andocken",
      "tätig"
    ]
  },
  {
    "question": "most people believe",
    "correct": "viele Leute sind der Meinung, dass ...",
    "choices": [
      "rastlos",
      "der Pazifismus",
      "der Computerbereich",
      "viele Leute sind der Meinung, dass ..."
    ]
  },
  {
    "question": "it is totally accepted that ...",
    "correct": "es ist allgemein bekannt, dass ...",
    "choices": [
      "die Betriebswirtschaft",
      "es ist allgemein bekannt, dass ...",
      "der Umstand",
      "das Scheitern"
    ]
  }
];