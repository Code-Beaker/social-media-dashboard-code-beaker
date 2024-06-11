import "./typeScale.css";
import "./scss/style.scss";

const body = document.querySelector(".body");
const toggleButton = document.getElementById("toggleTheme");
const toggleSwitch = document.querySelector(".header__toggle-switch");
const nextTheme = document.getElementById("themeName");
const modeIndicator = document.querySelector("#toggleIndicator");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  toggleSwitch.classList.toggle("switch-on");
  toggleButton.classList.toggle("toggle-active");

  if (body.classList.contains("body-dark")) {
    nextTheme.textContent = "Dark";
    modeIndicator.classList.remove("bi-brightness-high");
    modeIndicator.classList.add("bi-moon");
  } else {
    nextTheme.textContent = "Light";
    modeIndicator.classList.add("bi-brightness-high");
    modeIndicator.classList.remove("bi-moon");
  }
});
