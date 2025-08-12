// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});


// Dark Mode Toggle
const themeToggle = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}


// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});


// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});



// Project Filter System
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});




// Typing Animation
const typingText = document.getElementById('typing-text');
const typingTexttest = document.getElementById('typing-text-test');//เพิ่มเติมสำหรับการแสดงชื่อ

const textArray = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'UI/UX Enthusiast'];
const textArraytest = ['panuwat takham', 'AkKaphan Totsathisrangsan'];//names teams
//typingText
let textIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;
//textArraytest
let textIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

// Typing for typingText
function typeWriter1() {
    const currentText = textArray[textIndex1];

    if (!isDeleting1) {
        charIndex1++;
        typingText.textContent = currentText.substring(0, charIndex1);

        if (charIndex1 === currentText.length) {
            isDeleting1 = true;
            setTimeout(typeWriter1, 2000);
            return;
        }
    } else {
        charIndex1--;
        typingText.textContent = currentText.substring(0, charIndex1);

        if (charIndex1 === 0) {
            isDeleting1 = false;
            textIndex1 = (textIndex1 + 1) % textArray.length;
        }
    }

    setTimeout(typeWriter1, isDeleting1 ? 50 : 150);
}

// Typing for typingTexttest
function typeWriter2() {
    const currentText = textArraytest[textIndex2];

    if (!isDeleting2) {
        charIndex2++;
        typingTexttest.textContent = currentText.substring(0, charIndex2);

        if (charIndex2 === currentText.length) {
            isDeleting2 = true;
            setTimeout(typeWriter2, 1000);
            return;
        }
    } else {
        charIndex2--;
        typingTexttest.textContent = currentText.substring(0, charIndex2);

        if (charIndex2 === 0) {
            isDeleting2 = false;
            textIndex2 = (textIndex2 + 1) % textArraytest.length;
        }
    }

    setTimeout(typeWriter2, isDeleting2 ? 50 : 150);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter1, 2000);
    setTimeout(typeWriter2, 1500);
});



// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});