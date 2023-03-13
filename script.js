const drop = document.querySelector(".dropdown");
const nav = document.querySelector(".navigation");
const closeBtn = document.querySelector(".dropdown-close");

drop.addEventListener("click", () => {
  nav.style.opacity = "1";
  closeBtn.style.display = "block";
  drop.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  nav.style.opacity = "0";
  closeBtn.style.display = "none";
  drop.style.display = "block";
});
