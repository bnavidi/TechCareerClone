const slider = document.querySelector('.sliderImg');
const slides = document.querySelectorAll('.sliderImg img');
const prevBtn = document.querySelector('#sliderPrev');
const nextBtn = document.querySelector('#sliderNext');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
})

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0){
        currentIndex--;
        updateSlider();
    }
});

