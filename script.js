// ===========================
// Global Variables
// ===========================
let currentNewsIndex = 0;
let currentTestimonialIndex = 0;
let countersAnimated = false;




// Sample fixture data
const fixturesData = [
    {
        opponent: 'City United',
        date: '2024-07-15',
        venue: 'Mac-Star Stadium',
        status: 'upcoming',
        result: null,
        time: '15:00'
    },
    {
        opponent: 'Royal FC',
        date: '2024-07-20',
        venue: 'Away',
        status: 'upcoming',
        result: null,
        time: '18:30'
    },
    {
        opponent: 'Elite Sports',
        date: '2024-07-10',
        venue: 'Mac-Star Stadium',
        status: 'completed',
        result: '3-1',
        time: '16:00'
    },
    {
        opponent: 'Victory FC',
        date: '2024-07-05',
        venue: 'Away',
        status: 'completed',
        result: '2-2',
        time: '14:00'
    },
    {
        opponent: 'Champion Hawks',
        date: '2024-07-25',
        venue: 'Mac-Star Stadium',
        status: 'upcoming',
        result: null,
        time: '17:00'
    },
    {
        opponent: 'Thunder United',
        date: '2024-07-01',
        venue: 'Away',
        status: 'completed',
        result: '4-0',
        time: '15:30'
    }
];

// Sample news data
const newsData = [
    {
        title: 'Mac-Star Academy Wins Regional Championship',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'June 10, 2024',
        description: 'Our U-18 team triumphed in the regional championship, showcasing exceptional teamwork and skill development.'
    },
    {
        title: 'New World-Class Training Facility Opened',
        image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'June 8, 2024',
        description: 'We are proud to announce the opening of our new state-of-the-art training facility with modern equipment.'
    },
    {
        title: 'Player Development Program Expansion',
        image: 'https://images.unsplash.com/photo-1509285307050-d4066910ec1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'June 5, 2024',
        description: 'Mac-Star Academy announces expansion of its youth development program to reach 1000+ players.'
    },
    {
        title: 'International Coaching Staff Joins Academy',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'June 1, 2024',
        description: 'Renowned international coaches join our academy to elevate training standards and player development.'
    }
];

// Sample testimonials
const testimonialsData = [
    {
        text: 'Mac-Star Academy transformed my football journey. The coaches are exceptional, and the facilities are world-class. I am grateful for the opportunities provided.',
        author: 'Ahmed Hassan',
        role: 'U-18 Player',
        stars: 5
    },
    {
        text: 'The professional environment and dedication to player development at Mac-Star is unmatched. My son has grown tremendously both as a player and person.',
        author: 'Maria Rodriguez',
        role: 'Parent',
        stars: 5
    },
    {
        text: 'I played at Mac-Star and now I am playing professionally. The academy gave me the foundation, skills, and mindset to succeed at the highest level.',
        author: 'Carlos Silva',
        role: 'Professional Player',
        stars: 5
    },
    {
        text: 'Best football academy in the region. The coaching staff is knowledgeable, the training is intense, and the community is supportive.',
        author: 'David Thompson',
        role: 'Current Senior Team',
        stars: 5
    }
];

// Sample sponsors
const sponsors = [
    'Nike',
    'Adidas',
    'Puma',
    'Emirates',
    'Coca-Cola',
    'Samsung',
    'Sony',
    'Pepsi'
];

// U-18 Elite player profiles
const u18Players = [
    { name: 'Adebayo Yusuf', position: 'Goalkeeper', number: 1, age: 17, city: 'Lagos' },
    { name: 'Chinedu Okafor', position: 'Defender', number: 2, age: 17, city: 'Abuja' },
    { name: 'Tunde Afolabi', position: 'Defender', number: 3, age: 16, city: 'Ibadan' },
    { name: 'Kelechi Eze', position: 'Defender', number: 4, age: 17, city: 'Enugu' },
    { name: 'Ibrahim Danjuma', position: 'Midfielder', number: 5, age: 17, city: 'Kano' },
    { name: 'Samuel Nwosu', position: 'Midfielder', number: 6, age: 17, city: 'Port Harcourt' },
    { name: 'Daniel Bassey', position: 'Midfielder', number: 7, age: 16, city: 'Benin City' },
    { name: 'Emeka Ibe', position: 'Forward', number: 8, age: 17, city: 'Owerri' },
    { name: 'Musa Jibril', position: 'Forward', number: 9, age: 17, city: 'Kaduna' },
    { name: 'Victor Osei', position: 'Forward', number: 10, age: 18, city: 'Accra' },
    { name: 'Noah Hassan', position: 'Goalkeeper', number: 12, age: 17, city: 'Jos' },
    { name: 'Chima Okorie', position: 'Defender', number: 13, age: 17, city: 'Aba' },
    { name: 'Bamidele Lawal', position: 'Midfielder', number: 14, age: 16, city: 'Ilorin' },
    { name: 'Femi Balogun', position: 'Midfielder', number: 15, age: 17, city: 'Ogun' },
    { name: 'Damilare Sadiq', position: 'Forward', number: 16, age: 17, city: 'Osun' },
    { name: 'Efe Morgan', position: 'Forward', number: 17, age: 18, city: 'Delta' },
    { name: 'Toheeb Adeniyi', position: 'Defender', number: 18, age: 17, city: 'Lagos' },
    { name: 'Solomon Ayo', position: 'Midfielder', number: 19, age: 17, city: 'Akure' },
    { name: 'Kazeem Folarin', position: 'Forward', number: 20, age: 18, city: 'Ibadan' },
    { name: 'Ismail Hassan', position: 'Midfielder', number: 21, age: 17, city: 'Kwara' },
    { name: 'Uche Okafor', position: 'Defender', number: 22, age: 17, city: 'Onitsha' },
    { name: 'Jeremiah Akin', position: 'Midfielder', number: 23, age: 16, city: 'Edo' },
    { name: 'Bright Nwankwo', position: 'Forward', number: 24, age: 17, city: 'Abakaliki' },
    { name: 'Tobi Akintunde', position: 'Forward', number: 25, age: 17, city: 'Ado-Ekiti' }
];

// ===========================
// DOM Elements
// ===========================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const loadingScreen = document.getElementById('loadingScreen');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');
const prevNews = document.getElementById('prevNews');
const nextNews = document.getElementById('nextNews');
const newsContainer = document.getElementById('newsContainer');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
const testimonialsContainer = document.getElementById('testimonialsContainer');
const galleryItems = document.querySelectorAll('.gallery-item');
const fixturesContainer = document.getElementById('fixturesContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const u18TeamCard = document.querySelector('.u18-team-card');
const teamModal = document.getElementById('teamModal');
const teamModalGrid = document.getElementById('teamModalGrid');
const teamModalClose = document.getElementById('teamModalClose');

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    hideLoadingScreen();
    populateFixtures();
    populateNews();
    populateTestimonials();
    populateSponsors();
    renderU18Players();
    setupEventListeners();
    observeAnimations();
});

// ===========================
// Loading Screen
// ===========================
function hideLoadingScreen() {
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);
}

// ===========================
// Navigation
// ===========================
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', stickyNavbar);

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    updateActiveLink();
                }
            }
        });
    });

    // Back to top button
    window.addEventListener('scroll', showBackToTop);
    backToTop.addEventListener('click', scrollToTop);

    // Contact form
    contactForm.addEventListener('submit', handleContactForm);

    // Gallery lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            openLightbox(img.src);
        });
    });

    closeLightbox.addEventListener('click', closeLightboxModal);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });

    // News carousel
    prevNews.addEventListener('click', previousNews);
    nextNews.addEventListener('click', nextNews);

    // Testimonials carousel
    prevTestimonial.addEventListener('click', previousTestimonial);
    nextTestimonial.addEventListener('click', nextTestimonial);

    // Fixtures filter
    filterButtons.forEach(button => {
        button.addEventListener('click', filterFixtures);
    });

    if (u18TeamCard) {
        u18TeamCard.addEventListener('click', openU18PlayersModal);
    }

    if (teamModalClose) {
        teamModalClose.addEventListener('click', closeU18PlayersModal);
    }

    if (teamModal) {
        teamModal.addEventListener('click', function(e) {
            if (e.target === teamModal) {
                closeU18PlayersModal();
            }
        });
    }
}

function openU18PlayersModal() {
    if (teamModal) {
        teamModal.classList.add('active');
        teamModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeU18PlayersModal() {
    if (teamModal) {
        teamModal.classList.remove('active');
        teamModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
}

function renderU18Players() {
    if (!teamModalGrid) {
        return;
    }

    teamModalGrid.innerHTML = u18Players.map(player => `
        <div class="player-card">
            <div class="player-avatar">${player.name.split(' ').map(word => word[0]).join('').slice(0, 2)}</div>
            <div class="player-number">#${player.number}</div>
            <h4>${player.name}</h4>
            <p class="player-position">${player.position}</p>
            <p class="player-meta">Age: ${player.age}</p>
            <p class="player-meta">City: ${player.city}</p>
        </div>
    `).join('');
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

function stickyNavbar() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    updateActiveLink();
}

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

    navLinks.forEach(link => {
        link.classList.remove('active');
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const elementTop = targetElement.offsetTop;
                const elementBottom = elementTop + targetElement.offsetHeight;

                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    link.classList.add('active');
                }
            }
        }
    });
}

// ===========================
// Back to Top
// ===========================
function showBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// Lightbox Gallery
// ===========================
function openLightbox(src) {
    lightbox.classList.add('active');
    lightboxImg.src = src;
    document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===========================
// Contact Form
// ===========================
function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });

    let isValid = true;

    // Validate name
    if (name.value.trim() === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^[\d\s\-\+\(\)]+$/;
    if (phone.value.trim() === '' || !phonePattern.test(phone.value)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        showError('messageError', 'Message is required');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        formMessage.textContent = 'Message sent successfully! We will get back to you soon.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');

        // Reset form
        contactForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
        }, 5000);
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// ===========================
// Fixtures
// ===========================
function populateFixtures() {
    renderFixtures('all');
}

function renderFixtures(filter) {
    fixturesContainer.innerHTML = '';

    let filteredFixtures = fixturesData;

    if (filter !== 'all') {
        filteredFixtures = fixturesData.filter(fixture => fixture.status === filter);
    }

    filteredFixtures.forEach(fixture => {
        const fixtureCard = document.createElement('div');
        fixtureCard.className = 'fixture-card';

        let resultHTML = '';
        if (fixture.status === 'completed') {
            resultHTML = `<div class="fixture-result">${fixture.result}</div>`;
        } else {
            resultHTML = `<div class="fixture-detail">
                <i class="far fa-clock"></i>
                <span>${fixture.time}</span>
            </div>`;
        }

        fixtureCard.innerHTML = `
            <div class="fixture-header">
                <span class="fixture-status status-${fixture.status}">
                    ${fixture.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </span>
            </div>
            <div class="fixture-teams">
                <div class="team-names">
                    <div class="team-name">Mac-Star</div>
                    <div class="vs">vs</div>
                    <div class="team-name">${fixture.opponent}</div>
                </div>
                ${resultHTML}
            </div>
            <div class="fixture-info">
                <div class="fixture-detail">
                    <i class="far fa-calendar"></i>
                    <span>${formatDate(fixture.date)}</span>
                </div>
                <div class="fixture-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${fixture.venue}</span>
                </div>
            </div>
        `;

        fixturesContainer.appendChild(fixtureCard);
    });
}

function filterFixtures(e) {
    const filterValue = e.target.getAttribute('data-filter');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Render filtered fixtures
    renderFixtures(filterValue);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ===========================
// News Carousel
// ===========================
function populateNews() {
    newsContainer.innerHTML = '';

    newsData.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-content">
                <p class="news-date">${news.date}</p>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <a href="#" class="news-read-more">
                    Read More
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
    scrollNewsCarousel();
}

function previousNews() {
    currentNewsIndex = (currentNewsIndex - 1 + newsData.length) % newsData.length;
    scrollNewsCarousel();
}

function scrollNewsCarousel() {
    const newsCards = document.querySelectorAll('.news-card');
    const scrollAmount = newsCards[0].offsetWidth + 30;
    newsContainer.style.transform = `translateX(-${currentNewsIndex * scrollAmount}px)`;
}

// ===========================
// Testimonials Carousel
// ===========================
function populateTestimonials() {
    testimonialsContainer.innerHTML = '';

    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        let starsHTML = '';
        for (let i = 0; i < testimonial.stars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }

        testimonialCard.innerHTML = `
            <div class="testimonial-stars">${starsHTML}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">${testimonial.author}</p>
            <p class="testimonial-role">${testimonial.role}</p>
        `;

        testimonialsContainer.appendChild(testimonialCard);
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
    scrollTestimonialCarousel();
}

function previousTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
    scrollTestimonialCarousel();
}

function scrollTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const scrollAmount = testimonialCards[0].offsetWidth + 40;
    testimonialsContainer.style.transform = `translateX(-${currentTestimonialIndex * scrollAmount}px)`;
}

// ===========================
// Sponsors Carousel
// ===========================
function populateSponsors() {
    const sponsorsCarousel = document.getElementById('sponsorsCarousel');
    sponsorsCarousel.innerHTML = '';

    sponsors.forEach((sponsor, index) => {
        const sponsorLogo = document.createElement('div');
        sponsorLogo.className = 'sponsor-logo';
        sponsorLogo.innerHTML = `
            <div style="text-align: center;">
                <p style="font-size: 2rem; font-weight: bold; color: var(--secondary-color); margin: 0;">
                    ${sponsor}
                </p>
            </div>
        `;
        sponsorsCarousel.appendChild(sponsorLogo);
    });
}

// ===========================
// Scroll Animations
// ===========================
function observeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate stat counters
                if (entry.target.classList.contains('stat-card')) {
                    const statNumbers = entry.target.querySelector('.stat-number');
                    if (statNumbers && !countersAnimated) {
                        animateCounter(statNumbers);
                    }
                }

                // Animate other elements
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });

    // Observe other elements for scroll animation
    document.querySelectorAll('.team-card, .achievement-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });

    // Observe teams to set animation delays
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===========================
// Counter Animation
// ===========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
            countersAnimated = true;
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===========================
// Utilities
// ===========================

// Smooth scroll fallback for older browsers
function smoothScroll(element, duration = 1000) {
    const startPosition = window.scrollY;
    const endPosition = element.offsetTop;
    const distance = endPosition - startPosition;
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollBy(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

// ===========================
// Keyboard Navigation
// ===========================
document.addEventListener('keydown', function(e) {
    // Close lightbox with Escape key
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            closeLightboxModal();
        }

        if (teamModal && teamModal.classList.contains('active')) {
            closeU18PlayersModal();
        }
    }

    // Arrow keys for carousel navigation
    if (e.key === 'ArrowLeft') {
        previousNews();
    }
    if (e.key === 'ArrowRight') {
        nextNews();
    }
});

// ===========================
// Window Resize Handler
// ===========================
window.addEventListener('resize', function() {
    // Recalculate carousel positions on resize
    scrollNewsCarousel();
    scrollTestimonialCarousel();
});

// ===========================
// Accessibility Enhancements
// ===========================

// Add ARIA labels for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add accessibility to gallery items
    galleryItems.forEach((item, index) => {
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Gallery image ${index + 1}`);
    });

    // Add accessibility to carousel buttons
    if (prevNews) prevNews.setAttribute('aria-label', 'Previous news');
    if (nextNews) nextNews.setAttribute('aria-label', 'Next news');
    if (prevTestimonial) prevTestimonial.setAttribute('aria-label', 'Previous testimonial');
    if (nextTestimonial) nextTestimonial.setAttribute('aria-label', 'Next testimonial');
});

// ===========================
// Performance Optimization
// ===========================

// Lazy load images (simple implementation)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Debounce scroll events for better performance
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

// Apply debounce to scroll event
window.addEventListener('scroll', debounce(function() {
    stickyNavbar();
    showBackToTop();
}, 50));

// ===========================
// Error Handling
// ===========================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// Handle promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===========================
// Console Messages
// ===========================
console.log('%cWelcome to Mac-Star Football Club', 'font-size: 24px; color: #FFD700; font-weight: bold;');
console.log('%cDeveloping Champions, Building Futures', 'font-size: 16px; color: #00D4FF;');
