const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let diapoEnCours = 0
	
// ETAPE 2: Récuperer les éléments html, ajouter un addEventListener avec un consol.log

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {
	console.log("Clique sur la flèche gauche")
});

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {
	console.log("Clique sur la flèche droite")
});

// ETAPE 3: Ajouter les bullets-points au slider

function ajouterBulletsPoints() {
    const dotsContainer = document.querySelector('.dots');
    for (let index = 0; index < slides.length; index++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === diapoEnCours) {
            dot.classList.add('dot_selected');
        }
        dot.addEventListener('click', () => {
            diapoEnCours = index;
            changeSlideTo(diapoEnCours); // Assurez-vous que cette fonction est définie ailleurs
        });
        dotsContainer.appendChild(dot);
    }
}
















   


	