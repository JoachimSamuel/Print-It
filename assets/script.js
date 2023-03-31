const slide = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let dotSelected = document.querySelector(".dot_selected")
let imgSlide = document.querySelector(".banner-img");
 console.log(imgSlide)
let tagLine = document.querySelector("#banner p");
 console.log(tagLine)
 
 let currentSlideIndex = 0;

 // ARROW LEFT AND RIGHT
arrowLeft.addEventListener("click", () => {
	arrowLeft.style.cursor = "pointer"
	showPrevSlide()
})
arrowRight.addEventListener("click", () => {
	arrowRight.style.cursor = "pointer"
	showNextSlide()
})

//Afficher la diapositive suivante
const showNextSlide = () => {
	currentSlideIndex++;
	if(currentSlideIndex >= slide.length){
		currentSlideIndex = 0;
	}
	updateSlide();

}

//Afficher la diapositive précédente

const showPrevSlide = () => {
	currentSlideIndex--;
	if(currentSlideIndex < 0){
		currentSlideIndex = slide.length -1;
	}
	updateSlide();
	
}

// Mettre à jour l'image et la ligne de texte de la diapositive
const updateSlide = () => {
	imgSlide.src = slide[currentSlideIndex].image;
	tagLine.innerHTML = slide[currentSlideIndex].tagLine;
  };

// Point pour chaque diapositive
  slide.forEach((slide, index ) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  // classe active pour le point de la  diapositive
  if (index === 0) {
    dot.classList.add("dot_selected");
  }

});

  


// ------------


