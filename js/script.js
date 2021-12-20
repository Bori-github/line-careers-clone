const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const listMenu = document.querySelector(".list-menu");
const btnLang = document.querySelector(".btn-lang");
const listLang = document.querySelector(".list-lang");
const btnSearch = document.querySelector(".btn-search");

const headerItems = [header, logo, listMenu, btnLang, listLang, btnSearch];

const btnCombo = document.querySelectorAll(".btn-combo");
const listCombo = document.querySelectorAll(".list-combo ul");
const comboOptions = document.querySelectorAll(".combo-option");
const btnNext = document.querySelector(".btn-next");

const btnSite = document.querySelector(".btn-site");
const listSite = document.querySelector(".list-site");

const btnSns = document.querySelectorAll("button[class^='sns']");
const listSns = document.querySelectorAll(".list-sns-more");

const btnScrollTop = document.querySelector(".btn-scroll-top");

const listParts = document.querySelectorAll(".list-part");

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
  listParts.forEach((list) => {
    list.classList.remove("on");
  });
};

const handleList = (e) => {
  const { target } = e;
  const parent = target.parentNode;
  if (parent.querySelector("ul[class^='list']").classList.contains("on")) {
    hideLists();
    target.classList.remove("on");
  } else {
    hideLists();
    target.classList.add("on");
    parent.querySelector("ul[class^='list']").classList.add("on");
  }
};

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
// Btns eventlisteners\
btnLang.addEventListener("click", handleList);
btnSite.addEventListener("click", handleList);

btnCombo.forEach((btn) => {
  btn.addEventListener("click", handleCombo);
});
comboOptions.forEach((option) => {
  option.addEventListener("click", handleOption);
});
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
    headerItems.forEach((item) => {
      item.classList.add("scroll-down");
    });
  } else {
    headerItems.forEach((item) => {
      item.classList.remove("scroll-down");
    });
    if (window.scrollY === 0) {
      btnScrollTop.classList.remove("scroll-up");
    }
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

// 은님 블로그
// https://m.post.naver.com/viewer/postView.naver?volumeNo=12402837&memberNo=1378210

// https://goddino.tistory.com/68
