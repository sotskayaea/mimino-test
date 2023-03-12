(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-table-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtn.forEach(el => {
    el.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log('click');
    refs.modal.classList.toggle('is-hidden');
  }
})();
