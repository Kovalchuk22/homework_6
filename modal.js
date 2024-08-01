document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');
  const modal = document.querySelector('[data-modal]');
  const backdrop = document.querySelector('.backdrop');

  openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          modal.classList.remove('is-hidden');
      });
  });

  closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          modal.classList.add('is-hidden');
      });
  });

  backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
          modal.classList.add('is-hidden');
      }
  });
});