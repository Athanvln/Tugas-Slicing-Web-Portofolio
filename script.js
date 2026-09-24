document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
    }
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    mobileMenuBtn.querySelector('i').className = isExpanded ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
});

const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        toast.classList.add('active');
         contactForm.reset();

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
    }
  });

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 150) {
           current = section.getAttribute('id');
      }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

});