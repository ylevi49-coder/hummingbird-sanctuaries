/* ============================================
   HUMMINGBIRD SANCTUARIES - INTERACTIVE SCRIPT
   Luxury Experience & Animations
   ============================================ */

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollEvents();
    setupFormHandlers();
    setupNavigationHandlers();
});

// ---- SCROLL ANIMATIONS ----
function initializeAnimations() {
    // Set initial animation delays for mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Animate on scroll
    observeElements();
}

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards that should animate on scroll
    const elementsToObserve = document.querySelectorAll(
        '.mission-card, .sanctuary-card, .testimonial-card, .tier-card'
    );
    
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

// ---- SMOOTH SCROLL NAVIGATION ----
function setupScrollEvents() {
    const scrollLinks = document.querySelectorAll('[data-scroll]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ---- MOBILE MENU ----
function setupNavigationHandlers() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(15, 40, 24, 0.95)';
            navLinks.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '15px';
            navLinks.style.zIndex = '999';
        });
    }
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = 'none';
    }
}

// ---- DONATION TIER SELECTION ----
function selectTier(amount) {
    const input = document.getElementById('selectedTier');
    const customInput = document.getElementById('customAmount');
    
    input.value = amount;
    
    // Scroll to form
    const form = document.getElementById('donationForm');
    form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Update custom amount if not set
    if (!customInput.value) {
        customInput.placeholder = `$${parseInt(amount).toLocaleString()}`;
    }
    
    // Visual feedback
    highlightSelectedTier(amount);
}

function highlightSelectedTier(amount) {
    const tierCards = document.querySelectorAll('.tier-card');
    tierCards.forEach(card => {
        const tierAmount = card.querySelector('.tier-amount').textContent;
        if (tierAmount.includes(amount)) {
            card.style.borderColor = '#e8c547';
            card.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
        } else {
            card.style.borderColor = 'rgba(212, 175, 55, 0.2)';
            card.style.boxShadow = 'none';
        }
    });
}

// ---- FORM HANDLING ----
function setupFormHandlers() {
    const donationForm = document.getElementById('donationForm');
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleDonation();
        });
    }
}

function handleDonation() {
    const form = document.getElementById('donationForm');
    const nameInput = form.querySelector('input[placeholder="Your name"]');
    const emailInput = form.querySelector('input[type="email"]');
    const selectedTier = document.getElementById('selectedTier').value;
    const customAmount = document.getElementById('customAmount').value;
    
    // Validation
    if (!nameInput.value || !emailInput.value) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!selectedTier && !customAmount) {
        showNotification('Please select a tier or enter a custom amount', 'error');
        return;
    }
    
    // Prepare donation data
    const donationData = {
        name: nameInput.value,
        email: emailInput.value,
        tier: selectedTier || customAmount,
        timestamp: new Date().toISOString()
    };
    
    // Simulate API call
    console.log('Processing donation:', donationData);
    
    // Show success message
    showNotification(
        `Thank you, ${nameInput.value}! Your generous contribution will help preserve our hummingbird sanctuaries. A confirmation has been sent to ${emailInput.value}`,
        'success'
    );
    
    // Reset form
    setTimeout(() => {
        form.reset();
        document.getElementById('selectedTier').value = '';
    }, 1500);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    const styles = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '20px 30px',
        borderRadius: '4px',
        zIndex: '2000',
        maxWidth: '400px',
        fontWeight: '500',
        animation: 'slideInRight 0.4s ease-out',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        fontSize: '0.95rem'
    };
    
    if (type === 'success') {
        Object.assign(notification.style, {
            ...styles,
            background: '#2d7a5e',
            color: '#f5f5f0',
            border: '1px solid #3d9b7f'
        });
    } else if (type === 'error') {
        Object.assign(notification.style, {
            ...styles,
            background: '#8b4444',
            color: '#f5f5f0',
            border: '1px solid #a85555'
        });
    } else {
        Object.assign(notification.style, {
            ...styles,
            background: '#2d7a5e',
            color: '#f5f5f0',
            border: '1px solid #d4af37'
        });
    }
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 40, 24, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 40, 24, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ---- PARALLAX EFFECT ON HERO ----
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && window.scrollY < 800) {
        const scrollPosition = window.scrollY * 0.5;
        heroBackground.style.transform = `translateY(${scrollPosition}px)`;
    }
});

// ---- COUNTER ANIMATION ----
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCount = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCount();
}

// Trigger counter animation on impact section visibility
const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            const metricNumbers = entry.target.querySelectorAll('.metric-number');
            metricNumbers.forEach(element => {
                const text = element.textContent.replace(/[^0-9]/g, '');
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    if (text.includes('94')) {
                        animateCounter(element, 94);
                    } else if (text.includes('12')) {
                        animateCounter(element, 12);
                    } else if (text.includes('500')) {
                        animateCounter(element, 500);
                    } else if (text.includes('45')) {
                        animateCounter(element, 45);
                    }
                }
            });
            
            impactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const impactSection = document.querySelector('.impact');
if (impactSection) {
    impactObserver.observe(impactSection);
}

// ---- KEYBOARD NAVIGATION ----
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Quick scroll with arrow keys
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 50);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -50);
    }
});

// ---- ACCESSIBILITY: FOCUS MANAGEMENT ----
document.addEventListener('focusin', function(e) {
    if (e.target.tagName === 'A' || e.target.classList.contains('btn')) {
        e.target.style.outline = '2px solid #d4af37';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    if (e.target.tagName === 'A' || e.target.classList.contains('btn')) {
        e.target.style.outline = 'none';
    }
});

// ---- PERFORMANCE: LAZY LOAD IMAGES ----
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ---- ADD CSS KEYFRAMES FOR ANIMATIONS ----
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(30px);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ---- LOG INITIALIZATION ----
console.log('🌺 Hummingbird Sanctuaries Website Loaded');
console.log('Luxury conservation platform initialized successfully');
