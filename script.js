/* ============================================
   WAHAT AL-QAMAR - Interactive JavaScript
   Advanced Effects & Functionality
   ============================================ */

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroBackground();
    initScrollEffects();
    initContactForm();
    initServiceCards();
    initProductCards();
    initPortfolioGallery();
    initObserverAnimations();
    initSmoothScroll();
});

/* ============================================
   NAVIGATION & SCROLL EFFECTS
   ============================================ */

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */

function initScrollEffects() {
    const revealElements = document.querySelectorAll(
        '.service-card, .product-card, .portfolio-item, .feature, .stat-item'
    );

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
}

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */

function initObserverAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = entry.target.style.animation || 'none';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   SERVICE CARDS INTERACTIVE EFFECTS
   ============================================ */

function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Add staggered animation to siblings
            serviceCards.forEach((sibling, siblingIndex) => {
                if (siblingIndex !== index) {
                    sibling.style.opacity = '0.6';
                    sibling.style.transition = 'all 0.3s ease';
                }
            });
            card.style.opacity = '1';
        });

        card.addEventListener('mouseleave', function() {
            serviceCards.forEach(sibling => {
                sibling.style.opacity = '1';
            });
        });
    });
}

/* ============================================
   PRODUCT CARDS INTERACTIVE EFFECTS
   ============================================ */

function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const viewButton = card.querySelector('.btn-small');
        
        if (viewButton) {
            viewButton.addEventListener('click', function() {
                const img = card.querySelector('.product-image img');
                const title = card.querySelector('.product-info h3');
                const desc = card.querySelector('.product-info p');
                
                showProductModal(img.src, title.textContent, desc.textContent);
            });
        }

        // Add parallax effect
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

/* ============================================
   PORTFOLIO GALLERY
   ============================================ */

function initPortfolioGallery() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.portfolio-overlay');
            const title = overlay.querySelector('h4').textContent;
            const desc = overlay.querySelector('p').textContent;
            
            showProductModal(img.src, title, desc);
        });
    });
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */

function showProductModal(imageSrc, title, description) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    modal.style.animation = 'fadeIn 0.3s ease';
}

// Close modal
const modal = document.getElementById('productModal');
const closeButton = document.querySelector('.close');

if (closeButton) {
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

/* ============================================
   CONTACT FORM FUNCTIONALITY
   ============================================ */

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(this);
            const data = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                phone: this.querySelector('input[type="tel"]').value,
                productType: this.querySelector('select').value,
                message: this.querySelector('textarea').value,
                timestamp: new Date().toLocaleString()
            };
            
            // Simulate form submission
            console.log('Form Data Submitted:', data);
            
            // Show success message
            showNotification('Thank you! We will contact you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // Optional: Send to a server
            // sendFormToServer(data);
        });
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 4.7s;
        z-index: 3000;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

/* ============================================
   SMOOTH SCROLL FUNCTIONALITY
   ============================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const element = document.querySelector(href);
                const offsetTop = element.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   ADVANCED MOUSE TRACKING & PARALLAX
   ============================================ */

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update floating boxes parallax
    const floatingBoxes = document.querySelectorAll('.floating-box');
    floatingBoxes.forEach((box, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - window.innerWidth / 2) / speed;
        const y = (mouseY - window.innerHeight / 2) / speed;
        
        box.style.transform = `translate(${x}px, ${y}px)`;
    });
});

/* ============================================
   CURSOR GLOW EFFECT (Optional Premium Feature)
   ============================================ */

function initCursorGlow() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(255, 183, 0, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(255, 183, 0, 0.3);
        display: none;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = (e.clientX - 15) + 'px';
        cursor.style.top = (e.clientY - 15) + 'px';
        cursor.style.display = 'block';
    });
    
    document.addEventListener('mouseleave', function() {
        cursor.style.display = 'none';
    });
}

/* ============================================
   PERFORMANCE OPTIMIZATION - LAZY LOADING
   ============================================ */

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ============================================
   SCROLL PROGRESS INDICATOR (Optional)
   ============================================ */

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #FFB700, #ff9500);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/* ============================================
   ACCESSIBILITY - KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    const modal = document.getElementById('productModal');
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Tab navigation for forms
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA' || focusedElement.tagName === 'SELECT') {
            focusedElement.style.boxShadow = '0 0 0 4px rgba(255, 183, 0, 0.2)';
        }
    }
});

/* ============================================
   PERFORMANCE MONITORING
   ============================================ */

function initPerformanceMonitoring() {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page Load Time: ' + pageLoadTime + 'ms');
        });
    }
}

// Initialize performance monitoring
initPerformanceMonitoring();

/* ============================================
   ANIMATION FRAME FOR SMOOTH UPDATES
   ============================================ */

let animationFrameId;

function updateAnimations() {
    // Update any continuous animations here
    animationFrameId = requestAnimationFrame(updateAnimations);
}

// Start animation loop
updateAnimations();

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get element scroll position
function getScrollPosition() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
    };
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ============================================
   SERVICE WORKER REGISTRATION (PWA Support)
   ============================================ */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
    });
}

/* ============================================
   LOGGING & DEBUG MODE
   ============================================ */

const DEBUG = false;

function debugLog(message, data = null) {
    if (DEBUG) {
        console.log(`%c[WAHAT AL-QAMAR] ${message}`, 'color: #FFB700; font-weight: bold;', data);
    }
}

debugLog('Website initialized successfully');

/* ============================================
   ADVANCED EFFECTS - PARTICLE ANIMATION
   ============================================ */

function initParticleAnimation() {
    const canvas = document.createElement('canvas');
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) return;
    
    // Optional: Add particle canvas for advanced effects
    // canvas.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1; opacity: 0.3;';
    // heroSection.style.position = 'relative';
    // heroSection.appendChild(canvas);
}

// Initialize particle animation (commented out for performance)
// initParticleAnimation();
