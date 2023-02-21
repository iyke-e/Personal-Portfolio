const viewMore = document.querySelector("#view-more");
const moreProject = document.querySelector(".more_projects");
const floatingNav = document.querySelector(".floating_nav");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav");
const bodyEl = document.querySelector("body");
const navLi = document.querySelectorAll(".navli");
const nav = document.querySelector("#header");

// code to expand view more project

viewMore.addEventListener("click", () => {
  moreProject.classList.toggle("show");
  moreProject.classList.contains("show")
    ? (viewMore.innerHTML = "Show Less")
    : (viewMore.innerHTML = "Show More Projects");
});

// code for opening mobile menu

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  bodyEl.classList.toggle("stop-scrolling");

  if (hamburger.matches(".fa-bars")) {
    hamburger.className = "";
    hamburger.className = "fa-solid fa-xmark";
  } else {
    hamburger.className = "";
    hamburger.className = "fa-solid fa-bars";
  }
});

//code to check screen size and remove temp hide nav function

function checkScreenWidth() {
  if (window.innerWidth <= 900) {
    window.removeEventListener("scroll", tempHideNav());
  }
  return;
}

navLi.forEach((e) => {
  e.addEventListener("click", () => {
    bodyEl.classList.remove("stop-scrolling");
    navMenu.classList.remove("open");
    hamburger.className = "";
    hamburger.className = "fa-solid fa-bars";
  });
});

let lastScrollY = window.scrollY;

function tempHideNav() {
  window.addEventListener("scroll", () => {
    lastScrollY < window.scrollY
      ? nav.classList.add("hiddenNav")
      : nav.classList.remove("hiddenNav");
    lastScrollY = window.scrollY;
  });
}

tempHideNav();

//=======================================================================

// code to send mail using emailjs library

function sendMail() {
  const params = {
    name: document.querySelector("#fullName").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  const serviceID = "service_rgrpn4e";
  const templateID = "template_e88i7st";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.querySelector("#fullName").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      console.log(res);
      alert("your message send successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

const form = document.querySelector("form");
const fullname = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const sendBtn = document.querySelector("#sendBtn");
sendBtn.addEventListener("click", () => {
  if ((fullname.value || email.value || message.value) !== "") {
    sendMail();
  }
  return;
});
