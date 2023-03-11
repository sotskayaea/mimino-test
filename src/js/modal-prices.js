(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-prices-modal-open]'),
    closeModalBtn: document.querySelector('[data-prices-modal-close]'),
    modal: document.querySelector('[data-prices-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
