// JavaScript para animar as especialidades ao rolar
window.addEventListener('scroll', function() {
    const specialties = document.querySelectorAll('.specialty-card');
    const triggerHeight = window.innerHeight * 0.85;

    specialties.forEach(specialty => {
        const specialtyTop = specialty.getBoundingClientRect().top;

        if (specialtyTop < triggerHeight) {
            specialty.classList.add('show');
        }
    });
});
