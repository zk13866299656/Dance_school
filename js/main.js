document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Nav background change on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(250, 248, 245, 0.95)';
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
    } else {
      nav.style.background = 'rgba(250, 248, 245, 0.85)';
      nav.style.boxShadow = 'none';
    }
  });
});
