// script for image carousel smooth scrolling (home page)
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const navLinks = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = index * slider.clientWidth;
        slider.scrollTo({ left: offset, behavior: 'smooth' });
        navLinks.forEach((link, idx) => {
            link.style.opacity = idx === index ? '1' : '0.5';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 10000);

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = index;
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});



// sticky navbar script
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// burger menu script 
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button-img');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleButton.onclick = function () {
        dropdownMenu.classList.toggle('hidden');
    }
});


// script for image carousel smooth scrolling (cars page)
document.addEventListener('DOMContentLoaded', () => {
    const cars_slider = document.querySelector('.cars-slider');
    const cars_slides = document.querySelectorAll('.cars-slide');
    const cars_navLinks = document.querySelectorAll('.cars-slider-nav a');
    let currentIndex = 0;
    const totalSlides = cars_slides.length;

    function showSlide(index) {
        const offset = index * cars_slider.offsetWidth;
        cars_slider.scrollTo({ left: offset, behavior: 'smooth' });
        cars_navLinks.forEach((link, idx) => {
            link.style.opacity = idx === index ? '1' : '0.5';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 10000);

    cars_navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = index;
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});


// script for filtering menu in cars page
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = button.id;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    card.classList.contains(filter) ? card.style.display = 'block' : card.style.display = 'none';
                }
            });
        });
    });
});