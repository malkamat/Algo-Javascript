function tableauxSansDoublons(...arrays) {

    /*solution 2*/

    let nvTab = []

    arrays.forEach(item => {
        nvTab = [...nvTab, ...item]
    })
console.log(nvTab)

return Array.from(new Set(nvTab))
}

    /* solution 1 * /
    // let nvTab =[]

    // const arrDeArgs = Array.from(arguments)

    // arrDeArgs.forEach(el => {
    //     for(i = 0; i < el.length; i++) {
    //         nvTab.push(el[i])
    //     }
    // })

    // const tableauClean = nvTab.filter((item , index) => nvTab.indexOf(item) === index)

    // return tableauClean
}
*/

console.log(tableauxSansDoublons([5,5,4], [6,3,5])); // [5, 4, 6, 3]
console.log(tableauxSansDoublons(["a","b","z"],["z","e","a"])); // ["a", "b", "z", "e"]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui assemble tous les tableaux que l'on passe en argument, sans avoir de doublons(si il y a deux fois(ou plus) la même valeur, supprimez la).


// -----------------  Conseils ------------------- //

// Array.from(arguments)
// filter()
// forEach()
// push()
// indexOf







