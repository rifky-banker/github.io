// Tailwind Configuration via CDN script
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0A192F',
                    light: '#112240',
                    lighter: '#233554',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F3E5AB',
                    dark: '#AA8C2C',
                },
                slate: {
                    light: '#8892b0',
                    lighter: '#a8b2d1',
                    lightest: '#ccd6f6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        }
    }
}

// Global Interactions
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('bg-transparent', 'py-6');
                navbar.classList.add('py-4');
            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.add('bg-transparent', 'py-6');
                navbar.classList.remove('py-4');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(element => {
        observer.observe(element);
    });

    // --- Active Link Highlighting ---
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('./','').replace('../',''))) {
            // It's a match, exception for index.html at root
            if(link.getAttribute('href') === 'index.html' && currentPath !== '/' && !currentPath.includes('index.html')) {
                return; 
            }
            link.classList.add('text-gold');
            link.classList.remove('text-white', 'text-slate-700');
        }
    });
});
