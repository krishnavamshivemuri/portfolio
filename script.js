// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form submission using CORS proxy to bypass Google restrictions
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch("https://corsproxy.io/?" + encodeURIComponent("https://script.google.com/macros/s/AKfycbxohM4VzKunvNB7X5hRDM15birOe0Kfc4BUKd18OOJBfj86FRMLTuFFQ-TS_kmamDmO/exec"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Still got an error. 😢");
  });
});

// Responsive Navigation Menu (burger icon)
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header').appendChild(navToggle);

const navMenu = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close Nav Menu on Link Click (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Optional: Fade-in Timeline Items (if used)
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

timelineItems.forEach(item => observer.observe(item));
