const indexModal = document.querySelector("#index-modal");
const btnShowModal = document.querySelector("#btn-show-modal");
const btnHideModal = document.querySelector("#btnHideModal");

btnShowModal.addEventListener("click", () => {
  showModal();
});

btnHideModal.addEventListener("click", () => {
  hideModal();
});

const showModal = () => {
  indexModal.classList.remove("hide-modal");
  indexModal.classList.add("show-modal");
};

const hideModal = () => {
  indexModal.classList.add("hide-modal");
  indexModal.classList.remove("show-modal");
};
