document.addEventListener('DOMContentLoaded', function() {
    const navBurger = document.getElementById('nav_burger');
    const mobileNav = document.getElementById('mobile_nav');
    const navBurgerIcon = document.getElementById('nav_burger_icon');
    const navExitIcon = document.getElementById('nav_exit_icon');
    const body = document.body;

    function openMobileNav() {
        mobileNav.classList.add('active');
        mobileNav.style.display = 'flex';
        navBurgerIcon.style.display = 'none';
        navExitIcon.style.display = 'block';
        body.classList.add('mobile-nav-active');
    }
    
    function closeMobileNav() {
        mobileNav.classList.remove('active');
        mobileNav.style.display = 'none';
        navBurgerIcon.style.display = 'block';
        navExitIcon.style.display = 'none';
        body.classList.remove('mobile-nav-active');
    }

    if (navBurger) {
        navBurger.addEventListener('click', function() {
            if (mobileNav.classList.contains('active')) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });
    }
    
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileNav();
        });
    });
    

    mobileNav.addEventListener('click', function(e) {
        if (e.target === mobileNav) {
            closeMobileNav();
        }
    });
    

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });
    
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    
    document.querySelectorAll('.readMoreBtn[data-target]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(targetId);
            
            if (details) {
                if (details.classList.contains('hidden')) {
                    details.classList.remove('hidden');
                    this.textContent = "Leer menos";
                    
                    // Smooth scroll hacia el contenido expandido en móvil
                    if (window.innerWidth <= 768) {
                        setTimeout(() => {
                            details.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'nearest' 
                            });
                        }, 100);
                    }
                } else {
                    details.classList.add('hidden');
                    this.textContent = "Leer más";
                }
            }
        });
    });


    if ('ontouchstart' in window) {
        // Remover hover effects en dispositivos táctiles
        const hoverElements = document.querySelectorAll('.project-card, .experience_item');
        hoverElements.forEach(element => {
            element.classList.add('touch-device');
        });
    }
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Offset para el header fijo
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    
    window.addEventListener('resize', function() {
        // Cerrar menú móvil si se cambia a desktop
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });
    


function isMobile() {
    return window.innerWidth <= 768;
}

function getViewportHeight() {
    return window.innerHeight || document.documentElement.clientHeight;
}


function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}
