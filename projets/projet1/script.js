//  variables dont on a besoin
var t, sp, h, mn, s, ms, btn_start, btn_stop;

//fonction d'initialisation lorsque la page se charge
window.onload = function () {
    t;
    sp = document.getElementsByTagName('span');
    h = 0, mn = 0, s = 0, ms = 0;
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
}

//mettre en place(ou à jour) le compteur
function updateChrono() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }

    //insertion des variables dans les span dans l'ordre h, min, s, ms.
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}

//mettre en place la fonction du boutton start
function start() {
    t = setInterval(updateChrono, 100);//execution de la fontion uodateChrono tout les 100ms
    btn_start.desabled = true;
}

//mettre en place la fonction du bouton stop
function stop() {
    clearInterval(t);
    btn_start.disabled = false;
}

//initialisation des valeurs
function reset() {
    clearInterval(t);
    btn_start.desabled = false;
    h = 0, min = 0, s = 0, ms = 0;
    //inserer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}
