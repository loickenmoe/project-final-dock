const box2b = document.getElementById('box2b');
const home = document.getElementById('home');
const navigationBtn = document.querySelectorAll('.navigationBtn');
const projetsView = document.getElementById('projets');
const respoBtn = document.getElementById('respoBtn');

const box1 = document.querySelector('.box1');
const xmark = document.querySelector('.fa-xmark');
const bars = document.querySelector('.fa-bars');

home.style.backgroundColor = '#0171BB';
projetsView.style.display = 'none';

let i = 0
xmark.style.display = 'none';

// fonction pour faire apparaitre la navbar au click sur le bouton
function affichage() {
    if (box1.style.display == 'none') {
        box1.style.display = 'flex';
        xmark.style.display = 'flex'
        bars.style.display = 'none'
    } else {
        box1.style.display = 'none';
        xmark.style.display = 'none';
        bars.style.display = 'flex'
    }
}

// fonction pour afficher les differents projets dans un seul projet
function loic(ken) {
    for (let i = 0; i < navigationBtn.length; i++) {
        navigationBtn[i].style.backgroundColor = '#fff';
    }
    if (ken == 'home') {
        home.style.backgroundColor = '#0171BB';
        box2b.style.display = 'flex';
        projetsView.style.display = 'none';
    } else {
        // home.style.backgroundColor ='#fff';
        box2b.style.display = 'none';
        projetsView.style.display = 'flex';
        navigationBtn[ken].style.backgroundColor = '#0171BB';

        const container = document.createElement('iframe');
        container.src = `./projets/projet${ken}/index.html`;
        if (i != 0) {
            projetsView.removeChild(projetsView.firstChild)
        }
        projetsView.appendChild(container);
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.border = '3px solid #8b8b91';
        i++
    }
    if (window.screen.width <= 700) {  //gestion de la taille des ecrans <= 700 px
        affichage()                    //fait disparaires la navbar losque l'on clique sur un des liens dans la navbar
    }
}

