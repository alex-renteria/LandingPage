/**
 * Data Grid Landing Page JavaScript
 * Handles interactive elements and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initSmoothScroll();
    initContactForm();
    initAnimations();
});

/**
 * Navbar functionality - changes background on scroll
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add active class to nav items when section is in viewport
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
                
                // Scroll to element
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact form handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.footer-newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email || !isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send this to a server
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Show form submission message
 */
function showFormMessage(message, type) {
    // Check if message element already exists
    let messageElement = document.querySelector('.form-message');
    
    if (!messageElement) {
        // Create message element
        messageElement = document.createElement('div');
        messageElement.className = 'form-message mt-3';
        document.getElementById('contactForm').appendChild(messageElement);
    }
    
    // Set message content and style
    messageElement.textContent = message;
    messageElement.className = `form-message mt-3 alert ${type === 'error' ? 'alert-danger' : 'alert-success'}`;
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

/**
 * Initialize animations and interactive elements
 */
function initAnimations() {
    // Add fade-in animation to elements as they come into view
    const animatedElements = document.querySelectorAll('.service-card, .benefit-item, .process-step, .case-study-card');
    
    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .benefit-item, .process-step, .case-study-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animated, .benefit-item.animated, .process-step.animated, .case-study-card.animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

/**
 * Counter animation for statistics
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 16)); // 60fps
        
        let current = 0;
        const counterInterval = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                clearInterval(counterInterval);
            } else {
                counter.textContent = current + (counter.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    });
}

// Initialize counter animation when stats section is in view
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-row');
    
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(statsSection);
    }
});
