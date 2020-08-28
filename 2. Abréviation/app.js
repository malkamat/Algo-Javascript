function abreviation(str) {
    let tab = str.trim().split(" ")
    
    if(tab.length > 2) {
        tab.slice(0,2)
        console.log(tab)
    }

    if(tab.length > 1) {
        return (`${tab[0]} ${tab[1].charAt()}.`)
    }

    else {
        return tab[0]
    }

};

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("             Alfred Hitchcock                 ")); // Alfred H.



// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner l'abréviation d'un nom et prénom, qui va retourner "John D." quand on lui passe en argument "John Doe"

// -----------------  Conseils ------------------- //

// On peut résoudre cet algo à base de conditions, on "nettoie" la chaîne de caractères en enlevant les espacements et en gardant seulement
// les deux premiers mots, on retourne ensuite le premier mot qui est le prénom et la premiere lettre du second + "."

// Fonctions utiles 
// trim()
// split()
// charAt()
// slice()