let currentIndex = 0;

cards = document.getElementsByClassName('square');

function updateSlider(index) {
    if (screen.width > 1000) {
        index = 0;
    }
    const slider = document.querySelector('.slider');
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;    
}

const slider = document.querySelector('.slider');
const hammer = new Hammer(slider);

hammer.on('swipeleft', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider(currentIndex);
});

hammer.on('swiperight', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider(currentIndex);
});


var loop = setInterval(function(){
    updateSlider(currentIndex);
}, 40);

