var message = document.querySelector('.message');
var section = document.querySelector('section');
var nb1 = document.querySelector('.nb1');
var op = document.querySelector('.op');
var nb2 = document.querySelector('.nb2');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var compteur = 0;

// nombre aléatoire début du jeu
random1 = Math.random() * 11 << 0; //pour générer des nombres entre 0 et 11
random2 = Math.random() * 11 << 0; //pour générer des nombres entre 0 et 11
console.log(random1);
console.log(random2);
//inserer les nombre au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

// fonction de vérification
function verifier() {
    // récuperer le resultat entré par le joueur
    var res = document.querySelector('.res').value;
    if (random1 + random2 == res) {
        message.style.background = "green";
        message.innerHTML = "Correcte."
        // créer d'autres nombres aléatoires
        // nombre aléatoire début du jeu
        random1 = Math.random() * 11 << 0; //pour générer des nombres entre 0 et 11
        random2 = Math.random() * 11 << 0; //pour générer des nombres entre 0 et 11
        console.log(random1);
        console.log(random2);
        //inserer les nombre au hasard dans les variables nb1 et nb2
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur += 1

    } else {
        message.style.background = "red";
        message.innerHTML = "Vous avez perdu."
        section.innerHTML = "  ";
        score.innerHTML = `<span>${compteur}</span> </br> score `;
        link.style.display = " block"
    }
}

