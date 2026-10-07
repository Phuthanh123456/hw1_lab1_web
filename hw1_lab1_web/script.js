const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    primaryNavigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    primaryNavigation.classList.toggle('is-open', !isExpanded);
  });

  primaryNavigation.addEventListener('click', (event) => {
    const navigationLink = event.target.closest('a[href^="#"]');
    if (!navigationLink) return;

    closeMenu();

    const target = document.getElementById(navigationLink.hash.slice(1));
    const targetHeading = target?.querySelector('h2');
    if (targetHeading) {
      requestAnimationFrame(() => targetHeading.focus({ preventScroll: true }));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  const mobileNavigation = window.matchMedia('(max-width: 760px)');
  let lastNavigationFocus = null;

  primaryNavigation.addEventListener('focusin', (event) => {
    lastNavigationFocus = event.target;
  });

  document.addEventListener('focusin', (event) => {
    if (event.target !== document.body && !primaryNavigation.contains(event.target)) {
      lastNavigationFocus = null;
    }
  });

  mobileNavigation.addEventListener('change', (event) => {
    const toggleHadFocus = document.activeElement === menuToggle;
    const navigationHadFocus = primaryNavigation.contains(document.activeElement)
      || (document.activeElement === document.body && lastNavigationFocus?.isConnected);

    closeMenu();

    if (event.matches && navigationHadFocus) {
      menuToggle.focus();
    } else if (!event.matches && toggleHadFocus) {
      primaryNavigation.querySelector('a')?.focus();
    }
  });
}

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
