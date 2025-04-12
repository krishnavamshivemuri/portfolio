// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Contact Form Submission to Google Sheets
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        timestamp: new Date().toLocaleString(),
        name: contactForm.name.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value
    };

    fetch('https://script.google.com/macros/s/AKfycbx7t-sgXDz1XReOICRYOl-qoZhZMqQfN4Q9bD6VCGbNvgX0cyb31UFyRU51AYfB-3AF/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for reaching out! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
    });
});

// Fade-In Effect for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    observer.observe(item);
});

// Responsive Navigation Menu
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header').appendChild(navToggle);

const navMenu = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close Nav Menu on Link Click
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
