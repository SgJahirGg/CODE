document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#f9f9f9';
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = 'transparent';
            section.style.boxShadow = 'none';
        });
    });

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
