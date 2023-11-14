// les variables
var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function () {
    // vérification si l'input n'est pas Vide
    
    if (inputField.value != "") {
        //si l'input n'est pas vide, crée un paragraphe
        var paragraph = document.createElement('p');
    }

    //valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value;

    //styliser le paragraphe
    paragraph.classList.add('paragraphe_style');

    //insere le paragraphe dans l'élement paragrapheAjouté
    toDoContainer.appendChild(paragraph);

    //vider le champ de saisie quand le paragraphe est saisi
    inputField.value = "";

    //barer le paragraphe quand on click dessus
    paragraph.addEventListener("click",function(){
        paragraph.classList.add('paragraph-click');
    })

    //supprimer la tache quand on double-clik sur le paragraphe
    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph);
    })

}
