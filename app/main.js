import "./typeScale.css";
import "./scss/style.scss";

const body = document.querySelector(".body");
const toggleButton = document.getElementById("toggleTheme");
const nextTheme = document.getElementById("themeName");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("body-dark");

  if (body.classList.contains("body-dark")) {
    nextTheme.textContent = "Light";
  } else {
    nextTheme.textContent = "Dark";
  }
});
