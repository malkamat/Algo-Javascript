function tableauAdition(tab) {

    let count = 0

   for(i = 0; i  < tab.length; i++) {

    count += tab[i]
   }

   return count

   //solution avec une fonction récursive
//    if(tab.length === 1) {
//     return tab[0]
// }
// else {
//     return tab.pop() + tableauAdition(tab)
// }

};
  
console.log(tableauAdition([1,2,3,4,5,6]));



// -----------------  Énoncé ------------------- //

// Créez un algorithme pour aditionner les valeurs d'un tableau.

// -----------------  Conseils ------------------- //


// pop()
// recursion






