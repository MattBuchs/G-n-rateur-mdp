// Récupération des éléments
const button = document.querySelector('button');
const copy = document.querySelector('.copy');

const range = document.querySelector('#range');
const mdp = document.querySelector('#mdp');

const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "123456789";
const symbol = ",./%@!?&#()-_";
let alphaRandom;

// Clique du button
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(mdp.value) {
        mdp.value = null;
    }

    if(document.querySelector('#minuscule').checked === false && 
    document.querySelector('#majuscule').checked === false &&
    document.querySelector('#nombre').checked === false &&
    document.querySelector('#symbole').checked === false) {

        alert('Cocher au moins une case please !');
    }
    else {
        for(let i = 0; i < nbMdp.innerHTML; i++) {
            let randomFigure = getRandomInt(1, 5);

            switch(randomFigure) {
                case 1:
                    if(document.querySelector('#minuscule').checked === true) {
                        alphaRandom = alpha[Math.floor(Math.random() * 26)];
                        break;
                    }
                    else {
                        i--;
                        continue;
                    }
                case 2:
                    if(document.querySelector('#majuscule').checked === true) {
                        alphaRandom = alphaMaj[Math.floor(Math.random() * 26)];
                        break;
                    }
                    else {
                        i--;
                        continue;
                    }
                case 3:
                    if(document.querySelector('#nombre').checked === true) {
                        alphaRandom = number[Math.floor(Math.random() * 9)];
                        break;
                    }
                    else {
                        i--;
                        continue;
                    }
                case 4:
                    if(document.querySelector('#symbole').checked === true) {
                        alphaRandom = symbol[Math.floor(Math.random() * 13)]
                        break;
                    }
                    else {
                        i--;
                        continue;
                    }
            }
           
            mdp.value += alphaRandom;
        }
    }
});

// Choisir la taille du mdp
let nbMdp = document.querySelector('.nb-mdp');
range.addEventListener("input", () => { 
    nbMdp.innerHTML = range.value;
});

// Copie le mdp
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(mdp.value);

    copy.innerHTML = `
    <img src="ressources/checked.png" alt="valider">
    `;

    setTimeout(() => {
        copy.innerHTML = `
        <img src="ressources/copy.svg" alt="Copier le mot de passe">
        `;
    }, 2000);
});

// Générer un chiffre aléatoire
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}