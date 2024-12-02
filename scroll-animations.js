document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section:not(.hero)');
    const options = {
        root: null,
        rootMargin: '-10% 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once the animation is done, we can stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
