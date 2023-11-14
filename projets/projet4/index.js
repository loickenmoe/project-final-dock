const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let choixOrdinateur
let resultat

// evenement click sur les bouttons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener("click", (e) => {
    //récupération de id du boutton cliqué
    choixUtilisateur = e.target.id;
    //ajouter l'image correspondante au choix de l'utilisateur
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur();
    verification()
}))

// fonction pour generer le choix de l'ordinateur
function generer_choix_ordinateur() {
    random = Math.floor(Math.random() * 3) + 1  //generer des nombres compris entre 1 et 3
    if (random === 1) {  //si random = à 1 :
        choixOrdinateur = "pierre"
    }
    if (random === 2) {   //si random = à 1 :
        choixOrdinateur = "papier"
    }
    if (random === 3) {    //si random = à 1 :
        choixOrdinateur = "ciseaux"
    }

    // on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}

//fonction pour vérifier si le joueur à gagné ou pas
function verification() {
    if (choixUtilisateur == choixOrdinateur) {
        resultat = "Egalité !";
    }

    // les cas ou le joueur perd
    if (choixUtilisateur == "pierre" && choixOrdinateur == "papier") {
        resultat = "perdu !";
    }
    if (choixUtilisateur == "papier" && choixOrdinateur == "ciseaux") {
        resultat = "perdu !";
    }
    if (choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "perdu !";
    }

    // les cas ou le joueur gagne
    if (choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat = "Gagné !";
    }
    if (choixUtilisateur == "ciseaux" && choixOrdinateur == "papier") {
        resultat = "Gagné !";
    }
    if (choixUtilisateur == "papier" && choixOrdinateur == "pierre") {
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat;
}
