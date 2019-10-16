const open = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const close = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
}

function closeModal(event) {
  modal.classList.add("hidden");
}

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
