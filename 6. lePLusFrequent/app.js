function lePlusFrequent(tab){

    let myObject = {

    }

    let tabCopy = tab
    let compteur = 0
    let plusGrand = 0
    let itemPlusNombreux = []

    while(tabCopy.length > 0) {
        for(i = 0 ; i < tabCopy.length; i++) {
            if(tabCopy[0] === tabCopy[i]){
                compteur++
            }
        }
        myObject[`nbDe${tabCopy[0]}`] = [tabCopy[0], compteur]
        compteur = 0

        let varActuelle = tabCopy[0]
        tabCopy = tabCopy.filter(item => item !== varActuelle)
 

        for(prop in myObject) {
            if(myObject[prop][1] >= plusGrand) {
                plusGrand = myObject[prop][1]
            }
        }

        for(prop in myObject) {
            if(myObject[prop][1] === 4) {
                itemPlusNombreux.push(myObject[prop][0])
            }
        }

        if(itemPlusNombreux.length > 1) {
            return `Les éléments : ${itemPlusNombreux} sont apparues le plus souvent, pour un total de ${plusGrand} fois chacun`
        } else {
            return `L'élément : ${itemPlusNombreux} est apparu le plus souvent, pour un total de ${plusGrand} fois chacun`
        }
       
    }
}




console.log(lePlusFrequent(['a',3,2,'a','b',2,'b',4,'a',3,'a',3])); 


// -----------------  Énoncé ------------------- //

// Créez un programme qui trouve le ou les éléments qui apparaissent le plus dans un tableau.

// -----------------  Conseils ------------------- //

// boucle for
// if
// Objet
// while
// filter
// push
//...




