// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/*
// Timeline Navigation
const timeline = document.querySelector('.timeline');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

prevBtn.classList.add('timeline-nav-btn', 'prev-btn');
nextBtn.classList.add('timeline-nav-btn', 'next-btn');

document.querySelector('#timeline').appendChild(prevBtn);
document.querySelector('#timeline').appendChild(nextBtn);

prevBtn.addEventListener('click', () => {
    timeline.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    timeline.scrollBy({ left: 300, behavior: 'smooth' });
});
*/

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch('https://script.google.com/macros/s/AKfycbwLkHrC7syIVeCDPmt1ypmsQ9oRzkHUaBsrvKHenWsLMsEvRrFMRXnA9h-fUZkMxGY6Jw/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    alert('Message sent successfully!');
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert('Error submitting the form.');
  });
});


// Fade-In Effect for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when item is in view
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the item is visible

timelineItems.forEach(item => {
    observer.observe(item); // Observe each timeline item
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
