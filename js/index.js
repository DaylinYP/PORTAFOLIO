// SLIDER
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

// Duplicar los slides para continuidad
slides.forEach(slide => {
    const clone = slide.cloneNode(true); 
    slideTrack.appendChild(clone); 
});
