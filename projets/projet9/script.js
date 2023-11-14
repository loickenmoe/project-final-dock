let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');


function shortLinkFunct() {
    // vérification de l'input
    if (!longLink.value == "") {
        // vider l'érreur
        error.innerHTML = "";
        // connection API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;//lien API en description
        fetch(url)
            .then(Response => Response.text())
            .then(data => short.innerHTML = data);

        // afficher le resultat
        short.style.display = "block";

        if (short.innerHTML.length == 0) {
            short.innerHTML = "Lien Non Valide !"
        }
    } else {
        // error
        error.innerHTML = "veuillez remplir le champ !"
        short.style.display = "none";
    }
}
 