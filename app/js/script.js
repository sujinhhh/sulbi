const btnHamberger = document.querySelector("#btnHamberger");
const header = document.querySelector(".header");

btnHamberger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
