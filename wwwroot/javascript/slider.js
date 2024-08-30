const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = 12;
const slideToShow = 8;

function showSlide(index){
    if(index>= slides.length){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex = slides.length - 1;
    }else{
        currentIndex = index;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    currentIndex++;
    if (currentIndex > totalSlides - slideToShow) {
        currentIndex = 0;
    }
    document.querySelector('.slider').style.transform = `translateX(-${(100 / slideToShow) * currentIndex}%)`;
}, 3000);

nextBtn.addEventListener('click',()=>{
    showSlide(currentIndex + 1);
});
prevBtn.addEventListener('click',()=>{
    showSlide(currentIndex - 1);
});




