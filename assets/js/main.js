/* Mobile nav toggle + current year */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click (mobile)
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.tagName.toLowerCase() === 'a' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();