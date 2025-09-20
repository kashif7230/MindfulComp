// Global state
let isDarkMode = false;
let isMobileMenuOpen = false;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    addSmoothScrolling();
    addScrollAnimations();
    console.log('AI Mental Health Support page loaded successfully');
});

// Theme Management
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    }
    
    // Store preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    console.log('Theme toggled to:', isDarkMode ? 'dark' : 'light');
}

function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
}

// Mobile Menu Management
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileNav) {
        mobileNav.classList.toggle('active', isMobileMenuOpen);
    }
    
    if (hamburger) {
        hamburger.textContent = isMobileMenuOpen ? '✕' : '☰';
    }
    
    console.log('Mobile menu toggled:', isMobileMenuOpen);
}

function closeMobileMenu() {
    isMobileMenuOpen = false;
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileNav) {
        mobileNav.classList.remove('active');
    }
    
    if (hamburger) {
        hamburger.textContent = '☰';
    }
}

// Hero Section Interactions
function startConversation() {
    console.log('Start conversation clicked');
    // In a real implementation, this would open a chat interface
    alert('Starting conversation with Mindful Companion...\n\nThis would open the chat interface in a real implementation.');
}

function learnMore() {
    console.log('Learn more clicked');
    // Smooth scroll to understanding section
    document.getElementById('understanding').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function selectStarter(index) {
    const starters = [
        "Describe a typical session with Mindful Companion and how he creates a supportive environment.",
        "Explore strategies Mindful Companion might use to help a patient with anxiety disorders.",
        "Discuss the importance of empathy in Mindful Companion approach to psychotherapy.",
        "Outline the techniques Mindful Companion employs to address PTSD in his patients."
    ];
    
    console.log('Conversation starter selected:', starters[index]);
    
    // In a real implementation, this would populate the chat input
    alert(`Selected conversation starter:\n\n"${starters[index]}"\n\nThis would start the conversation in a real implementation.`);
}

// Core Functions Section
function selectFunction(index) {
    const functions = [
        'Emotional Support',
        'Cognitive Behavioral Therapy Tools',
        'Psychoeducational Information'
    ];
    
    console.log('Core function selected:', functions[index]);
    
    // Add visual feedback
    const card = document.querySelector(`[data-testid="card-function-${index}"]`);
    if (card) {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    }
}

// Benefits Section
function selectBenefit(index) {
    const benefits = [
        'Individuals Exploring Mental Health',
        'Students in Psychological Studies',
        'Individuals Seeking Anonymity and Convenience'
    ];
    
    console.log('Benefit group selected:', benefits[index]);
    
    // Add visual feedback
    const card = document.querySelector(`[data-testid="card-benefit-${index}"]`);
    if (card) {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    }
}

// How to Use Section
function stepAction(stepNumber, action) {
    console.log(`Step ${stepNumber} action clicked:`, action);
    
    const actions = {
        1: () => alert('Welcome! You can start using Mindful Companion right away without any registration.'),
        2: () => alert('Please select your area of focus:\n• Anxiety\n• Depression\n• Stress Management\n• General Mental Wellness'),
        3: () => alert('Chat interface would open here. You can start typing your thoughts and questions.'),
        4: () => alert('Dr. Mindful Companion will provide insights and techniques. Practice them regularly for best results.'),
        5: () => alert('Track your mood and progress over time. Mindful Companion will help you identify patterns.')
    };
    
    if (actions[stepNumber]) {
        actions[stepNumber]();
    }
    
    // Add visual feedback
    const button = document.querySelector(`[data-testid="button-step-action-${stepNumber - 1}"]`);
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
}

function getStarted() {
    console.log('Get started with all steps clicked');
    alert('Ready to begin your mental health journey!\n\n Mindful Companion is here to support you 24/7.\n\nThis would open the chat interface in a real implementation.');
}

// Footer Interactions
function footerLinkClick(href) {
    console.log('Footer link clicked:', href);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth Scrolling for Navigation Links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (isMobileMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.highlight-card, .function-card, .benefit-card, .step-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
    
    // Enter key on focused elements
    if (e.key === 'Enter') {
        const focused = document.activeElement;
        if (focused && focused.hasAttribute('onclick')) {
            focused.click();
        }
    }
});

// Window Resize Handler
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance Optimization - Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Accessibility Improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Focus Management
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Analytics Simulation (replace with real analytics in production)
function trackEvent(eventName, properties = {}) {
    console.log('Analytics Event:', eventName, properties);
    
    // In a real implementation, this would send data to your analytics service
    // Example: gtag('event', eventName, properties);
}

// Track initial page load
trackEvent('page_view', {
    page: 'ai_mental_health_landing',
    timestamp: new Date().toISOString()
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        toggleMobileMenu,
        startConversation,
        selectStarter,
        selectFunction,
        selectBenefit,
        stepAction,
        getStarted
    };
}