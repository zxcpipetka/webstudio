export default function modal() {
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector(".backdrop"),
      accept: document.querySelector("#accept"),
      form: document.querySelector("#modal_form"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
      if (event.target === refs.modal) toggleModal();
    });

    refs.form.addEventListener("submit", (event) => {
      if (!refs.accept.checked) {
        event.preventDefault();
        alert("Будь ласка, прийміть умови договору!");
      }
    });

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
}
