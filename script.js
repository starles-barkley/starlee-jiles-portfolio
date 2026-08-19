// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// Contact form — submits to Formspree via fetch so we can show an inline
// confirmation instead of redirecting the user off the page.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formNote.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formNote.textContent = "Thanks — I'll get back to you soon.";
        form.reset();
      } else {
        formNote.textContent = 'Something went wrong — please email me directly instead.';
      }
    } catch (err) {
      formNote.textContent = 'Something went wrong — please email me directly instead.';
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
