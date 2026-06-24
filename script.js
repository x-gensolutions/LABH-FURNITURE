// ============================================================
// Labh Furniture — House of Chairs
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  burgerBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll-reveal for sections/cards ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Contact form ----------
     NOTE: This form is front-end only — it does not send data anywhere yet.
     To make it actually deliver enquiries, wire it up to one of:
       - Formspree (https://formspree.io) — add an action="" URL, no backend needed
       - EmailJS (https://www.emailjs.com)
       - Your own backend endpoint
     Until then, the primary live channel is the WhatsApp button, which works immediately.
  ------------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    formNote.textContent = `Thanks${name ? ', ' + name : ''} — this demo form isn't connected to anything yet. For a real reply right now, use WhatsApp or call +91 94237 08433.`;
    form.reset();
  });

});
