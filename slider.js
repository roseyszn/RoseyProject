// IMAGE SLIDER

const slides = document.querySelectorAll(".slides fieldset");
let slideIndex = 0;

let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider)
function initializeSlider(){
    var x = window.matchMedia("(max-width: 500px)");
    if (slides.length > 0){
        if (!(x.matches)) { // If media query matches
            slides[slideIndex].classList.add("displaySlide")
            slides[slideIndex + 1].classList.add("displaySlide")
          } else {
            slides[slideIndex].classList.add("displaySlide")
          }
        intervalId = setInterval(nextSlide,3000);
    }
}

function showSlide(index){
      
    if (index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1 ;
    }

    slides.forEach (slide =>{
        slide.classList.remove("displaySlide");
    });
    var x = window.matchMedia("(max-width: 500px)");
    if (!(x.matches)) { // If media query matches
        slides[slideIndex].classList.add("displaySlide")
        slides[slideIndex + 1].classList.add("displaySlide")
      } else {
        slides[slideIndex].classList.add("displaySlide")
      }
    
}

function prevSlide(){
    clearInterval(intervalId);  
    slideIndex --;
    showSlide(slideIndex)

}

function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex)

}


let mybutton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
