document.addEventListener('DOMContentLoaded', function() {
    const specialties = document.querySelector('.specialties');
    const about = document.querySelector('.about');
    const benefits = document.querySelector('.benefits');
    const testimonial = document.querySelector('.testimonial');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 1.2;

        const specialtiesTop = specialties.getBoundingClientRect().top;
        if (specialtiesTop < triggerBottom) {
            specialties.classList.add('in-view');
        }

        const aboutTop = about.getBoundingClientRect().top;
        if (aboutTop < triggerBottom) {
            about.classList.add('in-view');
        }

        const benefitsTop = benefits.getBoundingClientRect().top;
        if (benefitsTop < triggerBottom) {
            benefits.classList.add('in-view');
        }

        const testimonialTop = testimonial.getBoundingClientRect().top;
        if (testimonialTop < triggerBottom) {
            testimonial.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica ao carregar a página
});
