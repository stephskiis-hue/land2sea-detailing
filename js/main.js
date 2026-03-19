// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Optional: Animate hamburger icon if you add 'open' styles in CSS
        const lines = document.querySelectorAll('.hamburger-line');
        lines.forEach(line => line.classList.toggle('open'));
    });
}

// --- Scroll-Reveal Animation ---
const observerOptions = {
    threshold: 0.15 // Trigger when 15% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Dynamic Glass Navbar Effect ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        // Adds background and shadow when scrolling down
        nav.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'shadow-xl', 'py-2');
        nav.classList.remove('py-4'); // Optional: shrinks nav slightly
    } else {
        // Returns to transparent when at the top
        nav.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'shadow-xl', 'py-2');
        nav.classList.add('py-4');
    }
});



// --- Slideshow Logic ---
const container = document.getElementById('slides-container');
const slides = document.querySelectorAll('#slides-container > div');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');
const dots = document.querySelectorAll('#slide-indicators > div');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlideshow() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.className = index === currentIndex 
            ? 'w-3 h-3 rounded-full bg-orange-500 cursor-pointer transition-all duration-300' 
            : 'w-3 h-3 rounded-full bg-slate-700 cursor-pointer hover:bg-slate-500';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlideshow();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlideshow();
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    container.parentElement.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.parentElement.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
}