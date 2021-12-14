const btnLang = document.querySelector(".btn-lang");
const listLang = document.querySelector(".list-lang");

const btnCombo = document.querySelector(".btn-combo");
const listCombo = document.querySelector(".btn-combo + ul");

const btnSite = document.querySelector(".btn-site");
const listSite = document.querySelector(".list-site");

btnLang.addEventListener("click", () => {
  listLang.classList.toggle("show");
});
btnCombo.addEventListener("click", () => {
  listCombo.classList.toggle("show");
});
btnSite.addEventListener("click", () => {
  listSite.classList.toggle("show");
});
