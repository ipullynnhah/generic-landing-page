const modal = document.querySelector(".modal");
const headerBtn = document.querySelector(".header__btn");
const faqBtn = document.querySelector(".faq__btn");
const modalCloseBtn = document.querySelector(".modal__btn--close");
const modalForm = document.querySelector(".modal__form");

headerBtn.addEventListener("click", () => modal.showModal());
faqBtn.addEventListener("click", () => modal.showModal());
modalCloseBtn.addEventListener("click", () => modal.close());