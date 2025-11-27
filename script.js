document.addEventListener('DOMContentLoaded', () => {
  // Respeta preferencia de motion reducida
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.animate-hidden').forEach(el => el.classList.add('fade-in'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('animate-hidden');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-hidden').forEach(el => observer.observe(el));
});
