function nbDeVoyelles(txt) {
  

}


// ---------------------- ma réponse -------------- // // Réussi //

function nbDeVoyelles(txt) {
    let result = 0

    let tableau = [...txt.toLowerCase()]
        for (i = 0; i < tableau.length; i++) {
        if (tableau[i] === "a" || tableau[i] === "e" || tableau[i] === "i" || tableau[i] === "o" || tableau[i] === "u" || tableau[i] === "y") {
            result += 1

        }

    }

    console.log(result)

}



console.log(nbDeVoyelles("jdhqgdqsghdakzejamazemlqksd")); // retourne 5
console.log(nbDeVoyelles("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aliquam?")); // retourne 28
console.log(nbDeVoyelles("L’imagination gouverne le monde.")); // retourne 13
console.log(nbDeVoyelles('zzzZZZzz'));



// -----------------  Énoncé ------------------- //

// Créez un programme qui retourne le nombre de voyelles dans une chaine de caractères.

// -----------------  Conseils ------------------- //

// Vous pouvez résoudre ce programme de plusieurs façon, en itérant dans l'argument qui
// est passé et le comparer à un tableau qui contient les voyelles par exemple.
// for of
// includes()


// Une autre façon serait d'utiliser un regex et de tester l'argument qui est passé dans notre fonction avec celui-ci.
// Regex
// match()


// N'oubliez pas qu'il y a toujours énormement de façons de résoudre un algo, si vous avez des idées, lancez-vous !