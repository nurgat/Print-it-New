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

let diapoCourante = 0
	
// ETAPE 2: Récuperer les éléments html, ajouter un addEventListener avec un consol.log

const fleche_gauche = document.querySelector(".arrow_left");
fleche_gauche.addEventListener('click', () => {
	changerDiapo (-1) // Fonction défini a la derniere etape
    console.log("Clic sur la flèche gauche");
});
	
const fleche_droite = document.querySelector(".arrow_right");
fleche_droite.addEventListener('click', () => {
	changerDiapo (1) // // Fonction défini a la derniere etape
    console.log("Clic sur la flèche droite");
});
	

// ETAPE 3: Ajouter les bullets-points au slider

function ajouterPointsNavigation() {
    const containeurPoints = document.querySelector('.dots');
    for (let index = 0; index < slides.length; index++) {
        const point = document.createElement('span');
        point.classList.add('dot');
        
        point.addEventListener('click', () => {
			console.log("J'ai cliqué sur un point");
            diapoCourante = index;
            changerDiapoVers(diapoCourante); // Appel de la Fonction qui sera définie juste en dessous
        });
        containeurPoints.appendChild(point);
    }
	// Cela garantit que le premier point est correctement mis en évidence dès le chargement initial de la page.
	mettreAjourPoints(diapoCourante); 
}
// Cet APPEL dit au JavaScript : "Maintenant, exécute le code que j'ai défini dans ajouterBulletsPoints."
ajouterPointsNavigation();

// Fonction mettant à jour l'image et le texte de la slide actuelle, ainsi que l'état des bullet points
function changerDiapoVers(diapoCourante) {
	// Met à jour l'attribut 'src' de l'image pour afficher la nouvelle slide.
		document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[diapoCourante].image}`;
	// Met à jour le contenu HTML du paragraphe pour afficher le texte de la nouvelle slide.
		document.querySelector('#banner p').innerHTML = slides[diapoCourante].tagLine;
	// Appelle la fonction pour mettre à jour les bullet points qui sera défini juste au dessous
	mettreAjourPoints(diapoCourante);
	}

	// Fonction pour mettre à jour l'état visuel des bullet points pour refléter la slide actuelle
	function mettreAjourPoints(diapoCourante) {
		const lesPoints = document.querySelectorAll('.dot');
		// Utilisation d'une boucle for pour parcourir tous les dots
		for (let index = 0; index < lesPoints.length; index++) {
			// Accès à chaque dot par son index
			const point = lesPoints[index];
			// Supprime la classe 'dot_selected' pour tous les dots
			point.classList.remove('dot_selected');
			// Ajoute la classe 'dot_selected' uniquement au dot correspondant à diapoEnCours
			if ( index === diapoCourante) {
				point.classList.add('dot_selected');
			}			
		}
	}

	// Étape 4 : Modifiez le slide au click sur le bouton

		// - Concernant les fleches : voir étape 2
		// - Concernaznt les points de navigation : voir étape 3

	// Étape 5 : Mettre en place le défilement infini

	function changerDiapo(direction) {
    // Calculer le nouvel index sans utiliser l'opérateur modulo
    diapoCourante += direction;

    // Si l'index dépasse la dernière diapositive, revenir à la première
    if (diapoCourante >= slides.length) {
        diapoCourante = 0;
    }
    // Si l'index est inférieur à la première diapositive, aller à la dernière
    else if (diapoCourante < 0) {
        diapoCourante = slide.length - 1;
    }

    // Appeler changerDiapoVers avec le nouvel index
    changerDiapoVers(diapoCourante);
}












   


	