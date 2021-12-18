const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const listMenu = document.querySelector(".list-menu");

const btnLang = document.querySelector(".btn-lang");
const listLang = document.querySelector(".list-lang");

const btnCombo = document.querySelectorAll(".btn-combo");
const listCombo = document.querySelectorAll(".list-combo ul");
const comboOptions = document.querySelectorAll(".combo-option");
const btnNext = document.querySelector(".btn-next");

const btnSite = document.querySelector(".btn-site");
const listSite = document.querySelector(".list-site");

const btnSns = document.querySelectorAll("button[class^='sns']");
const listSns = document.querySelectorAll(".list-sns-more");

const btnScrollTop = document.querySelector(".btn-scroll-top");

let arrowDown = true;
function showList() {
  const parentList = this.parentElement.parentElement.querySelectorAll("ul");
  const thisList = this.parentElement.querySelector("ul");
  const arrowIcon = this.querySelector("span:last-child");

  if (!thisList.classList.contains("on")) {
    parentList.forEach((e) => e.classList.remove("on"));
  }

  if (arrowDown) {
    arrowIcon.innerText = "keyboard_arrow_up";
    arrowDown = false;
  } else {
    arrowIcon.innerText = "keyboard_arrow_down";
    arrowDown = true;
  }

  thisList.classList.toggle("on");
}

const handleOption = (e) => {
  const { target } = e;
  const parent = target.parentNode;
  const btnCombo = parent.parentNode.parentNode.querySelector("button");
  const options = parent.querySelectorAll(".combo-option");
  options.forEach((option) => {
    if (option.classList.contains("selected")) {
      option.classList.remove("selected");
    } else {
      option.classList.remove("selected");
      option.classList.add("selected");
      btnNext.classList.add("selected");
      btnCombo.innerText = target.innerText;
      hideLists();
    }
  });
};

comboOptions.forEach((option) => {
  option.addEventListener("click", handleOption);
});

const hideLists = () => {
  listCombo.forEach((list) => {
    list.classList.remove("on");
  });
  btnCombo.forEach((btn) => {
    btn.classList.remove("on");
  });
  listSns.forEach((btn) => {
    btn.classList.remove("on");
  });
};

const handleCombo = (e) => {
  const { target } = e;
  const parent = target.parentNode;
  if (parent.querySelector("ul[class^='list']").classList.contains("on")) {
    hideLists();
  } else {
    hideLists();
    parent.querySelector("ul[class^='list']").classList.add("on");
    target.classList.add("on");
  }
};

// Click btn event
const handleList = (e) => {
  const { target } = e;
  const parent = target.parentNode;
  if (parent.querySelector("ul[class^='list']").classList.contains("on")) {
    hideLists();
  } else {
    hideLists();
    parent.querySelector("ul[class^='list']").classList.add("on");
  }
};

// Btns eventlisteners\
btnLang.addEventListener("click", showList);

btnCombo.forEach((btn) => {
  btn.addEventListener("click", handleCombo);
});

btnSite.addEventListener("click", showList);

btnSns.forEach((btn) => {
  btn.addEventListener("click", handleList);
});

btnScrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Window scroll event
window.addEventListener("scroll", () => {
  // scrollY 값이 헤더 높이보다 클 경우
  if (window.scrollY > 88) {
    // 헤더 스타일 변경
    header.classList.add("scroll-down");
    logo.classList.add("scroll-down");
    listMenu.classList.add("scroll-down");
    listLang.classList.add("scroll-down");
  } else {
    header.classList.remove("scroll-down");
    logo.classList.remove("scroll-down");
    listMenu.classList.remove("scroll-down");
    listLang.classList.remove("scroll-down");
  }
});

function scrollUpEvent() {
  window.onmousewheel = function (e) {
    // 마우스 휠 페이지 상단 방향으로 이동할 때
    if (e.wheelDelta === 120) {
      // btnScrollTop 아래에서 위로 나타남
      btnScrollTop.classList.add("scroll-up");
      if (window.scrollY < 120) {
        btnScrollTop.classList.remove("scroll-up");
      }
    } else {
      btnScrollTop.classList.remove("scroll-up");
    }
  };
}

scrollUpEvent();
