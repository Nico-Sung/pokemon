let prenomsSurvivants = ["Kilian", "Allan", "André", "Camille", "Alain"];

let jason = {
  nom: "Jason",
  pointsDeVie: 100,
  caracteristique: "le tueur en série"
};

let caracteristiques = ["le nerd", "le sportif", "le blond", "le nul", "le sorcier"];

let survivants = [];

for (let i = 0; i < 5; i++) {
  let nomSurvivant = prenomsSurvivants[Math.floor(Math.random() * prenomsSurvivants.length)];
  let pointsDeVie = 100;
  let caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)]; 
  survivants.push({ nom: nomSurvivant, pointsDeVie: pointsDeVie, caracteristique: caracteristique }); // le tableau contient trois propriétés et va rajouter le nom, point de vie et la caractéristique dans la variable survivants // .push sert à ajouter élement à la fin tableau //

}

let morts = [];

function simulerTour(attaquant, cible) {
  if (Math.random() < 0.5) {
    cible.pointsDeVie -= 10;
    return cible.nom + " " + cible.caracteristique + " a été attaqué par " + attaquant.nom + " " + attaquant.caracteristique + " et a perdu 10 points de vie.";
  } else {
    cible.pointsDeVie -= 15;
    morts.push(attaquant.nom);
    return cible.nom + " " + cible.caracteristique + " a été attaqué par " + attaquant.nom + " " + attaquant.caracteristique + " et a perdu 15 points de vie, mais " + attaquant.nom + " " +attaquant.caracteristique + " est aussi mort.";
  }
}

    while (jason.pointsDeVie > 0 && survivants.length > 0) {
        let survivantCible = survivants[Math.floor(Math.random() * survivants.length)];
        let action = simulerTour(jason, survivantCible);
        console.log(action);

        if (survivantCible.pointsDeVie <= 0) { // enleve le survivant quand il meurt dans le tableau mais ça ne marche pas //
            morts.push(survivantCible.nom);
            for (let i = 0; i < survivants.length; i++) {
            if (survivants[i] === survivantCible) {
                survivants.splice(i, 1);
                break; 
            }
            }
    }
  
  survivants.forEach(survivant => {   // le .forEach va servir a simuler les attaques des survivants contre Jason après qu'il ait attaqué un survivant. //
    let action = simulerTour(survivant, jason);
    console.log(action);
  });
}

if (jason.pointsDeVie <= 0) {
  console.log("Jason est mort." + " Les survivants ont gagné, mais RIP à " + morts.join(", "));
}

// le code marche mais je n'arrive pas a enlever les survivants dans le tableau 'survivants'. Désolé d'avance // 
