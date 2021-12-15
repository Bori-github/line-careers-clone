const btnLang = document.querySelector(".btn-lang");
const listLang = document.querySelector(".list-lang");

const btnCombo = document.querySelectorAll(".btn-combo");
const listCombo = document.querySelectorAll(".list-combo ul");
const comboOption = document.querySelectorAll(".combo-option");
const btnNext = document.querySelector(".btn-next");

const btnSite = document.querySelector(".btn-site");
const listSite = document.querySelector(".list-site");

let arrowDown = true;
function showList() {
  // console.log(this.parentElement);
  const thisList = this.parentElement.querySelector("ul");
  const arrowIcon = this.querySelector("span:last-child");

  if (arrowDown) {
    arrowIcon.innerText = "keyboard_arrow_up";
    arrowDown = false;
  } else {
    arrowIcon.innerText = "keyboard_arrow_down";
    arrowDown = true;
  }

  thisList.classList.toggle("show");
}

btnLang.addEventListener("click", showList);

btnCombo.forEach((el) => {
  el.addEventListener("click", showList);
});

// listCombo.forEach((el) => {
//   el.addEventListener("click", (item) => {
//     // console.log();
//     // console.log(item.target.innerText);
//     console.log(item);

//     // console.log(item.path[3].innerText);
//     // let itemCombo = item.target;
//     // itemCombo.classList.toggle("selected");
//     // btnNext.classList.toggle("selected");
//   });
// });

comboOption.forEach((el) => {
  el.addEventListener("click", (item) => {
    console.log(this);
    // console.log(item.target.innerText);
    // console.log(item.path);
    // console.log(item.path[3].innerText);
    let itemCombo = item.target;
    itemCombo.classList.toggle("selected");
    btnNext.classList.toggle("selected");
  });
});

btnSite.addEventListener("click", showList);

// document.addEventListener("scroll", function (e) {
//   console.log(e);
// });
