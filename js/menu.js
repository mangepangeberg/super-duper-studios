// ==========================================================================
// Micro-script för Hamburgermeny & Tillgänglighet (A11y)
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const menuDrawer = document.getElementById('menu-drawer');

if (menuToggle && menuDrawer) {
  function toggleMenu() {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isOpen);
    menuDrawer.classList.toggle('is-active', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Stäng med ESC-tangenten
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuDrawer.classList.contains('is-active')) {
      toggleMenu();
    }
  });

  // Stäng om man klickar på en länk i menyn
  menuDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuDrawer.classList.contains('is-active')) {
        toggleMenu();
      }
    });
  });
}