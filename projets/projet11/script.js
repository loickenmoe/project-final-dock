let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let heure = document.querySelector('.heure');

let string = "";
let arr = Array.from(buttons);
// heure.style.display= 'none';

// fonction pour l'affichage de l'heur
function afficherHeure() {
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    heure = heure < 10 ? "0" + heure : heure;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    let heureMinuteSecond = heure + ":" + minute + ":" + second;
    document.getElementById("heure").innerHTML = heureMinuteSecond;
    setTimeout(afficherHeure, 1000);
  }
  afficherHeure() 
// fonctions du bouton
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})