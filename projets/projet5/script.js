// définition des variables
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// lorsque l'utilisateur clique sur le champs du mot de passe, afficher la boite message
myInput.onfocus = function () {
    // let message = document.getElementById("message");
    //message.style.display = "block"
    document.getElementById("message").style.display = "block";
}

// lorsque l'utilisateur clique en dehors du champ de mot de passe,masquer la boite message
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// lorsque l'utilisateur commence à taper quelques chose dans le champ mot de passe
myInput.onkeyup = function () {
    //valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g
    if (myInput.value.match(lowerCaseLetters)) {
        //si le mot de passe contien une lettre miçnuscule, enlever la classe invalide et ajouter la classe valide
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        // sinon enlever la classe valide et ajouter la classe invalide
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    //valider les lettres majuscules
    var upperCaseLetters = /[A-Z]/g
    if (myInput.value.match(upperCaseLetters)) {
        //si le mot de passe contien une lettre majuscule, enlever la classe invalide et ajouter la classe valide
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        // sinon enlever la classe valide et ajouter la classe invalide
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    //valider les numbre
    var numbers = /[0-9]/g
    if (myInput.value.match(numbers)) {
        //si le mot de passe contien un chiffre, enlever la classe invalide et ajouter la classe valide
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        // sinon enlever la classe valide et ajouter la classe invalide
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //valider les numbre
    if (myInput.value.length >= 8) {
        //si le mot de passe contien au minimum 8 caractères, enlever la classe invalide et ajouter la classe valide
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        // sinon enlever la classe valide et ajouter la classe invalide
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
} 