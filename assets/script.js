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
        
        dot.addEventListener('click', () => {
			console.log("J'ai cliqué sur un point");
            diapoEnCours = index;
            changeSlideTo(diapoEnCours); // Appel de la Fonction qui sera définie juste en dessous
        });
        dotsContainer.appendChild(dot);
    }
	// S'assure que dès que les points sont créés et ajoutés au DOM, leur état visuel est mis à jour pour refléter la diapositive actuellement affichée. Cela garantit que le premier point est correctement mis en évidence dès le chargement initial de la page.
	updateDots(diapoEnCours); 
}
// Cet APPEL dit au JavaScript : "Maintenant, exécute le code que j'ai défini dans ajouterBulletsPoints."
ajouterBulletsPoints();

// Fonction mettant à jour l'image et le texte de la slide actuelle, ainsi que l'état des bullet points
function changeSlideTo(diapoEnCours) {
	// Met à jour l'attribut 'src' de l'image pour afficher la nouvelle slide.
		document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[diapoEnCours].image}`;
	// Met à jour le contenu HTML du paragraphe pour afficher le texte de la nouvelle slide.
		document.querySelector('#banner p').innerHTML = slides[diapoEnCours].tagLine;
	// Appelle la fonction pour mettre à jour les bullet points qui sera défini juste au dessous
	updateDots(diapoEnCours);
	}

	// Fonction pour mettre à jour l'état visuel des bullet points pour refléter la slide actuelle
	function updateDots(diapoEnCours) {
		const dots = document.querySelectorAll('.dot');
		// Utilisation d'une boucle for pour parcourir tous les dots
		for (let index = 0; index < dots.length; index++) {
			// Accès à chaque dot par son index
			const dot = dots[index];
			// Supprime la classe 'dot_selected' pour tous les dots
			dot.classList.remove('dot_selected');
			// Ajoute la classe 'dot_selected' uniquement au dot correspondant à diapoEnCours
			if (index === diapoEnCours) {
				dot.classList.add('dot_selected');
			}
		}
	}
	

	// Étape 4 : Modifiez le slide au clic sur le bouton
















   


	