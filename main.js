document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('.counter');
    if (counter) {
        counter.style.transform = 'translateY(0)';
    }
});

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const elements = {
        breads: document.querySelector('.breads'),
        clouds: document.querySelector('.clouds'),
        counter: document.querySelector('.counter'),
        text: document.querySelector('.hero-text'),
        contactSection: document.querySelector('.contact-section')
    };

    // Parallax effects
    if (elements.breads) {
        elements.breads.style.transform = `translateY(${scrollPos * 0.2}px) scale(0.8)`;
    }
    if (elements.clouds) {
        elements.clouds.style.transform = `translateX(${scrollPos * 0.15}px)`;
    }
    
    // Counter animation
    if (elements.counter) {
        elements.counter.style.transform = `translateY(${scrollPos * 0.1}px)`;
    }
    
    // Text animation
    if (elements.text) {
        elements.text.style.transform = `translateY(${scrollPos * 0.5}px)`;
        elements.text.style.opacity = 1 - scrollPos * 0.002;
    }

    // Contact section visibility fix
    if (elements.contactSection) {
        const contactOffset = elements.contactSection.offsetTop;
        const windowHeight = window.innerHeight;
        const contactScroll = scrollPos + windowHeight - contactOffset;
        
        if (contactScroll > 0) {
            elements.contactSection.style.opacity = '1';
        }
    }
});