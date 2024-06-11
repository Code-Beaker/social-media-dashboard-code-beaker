import "./typeScale.css";
import "./scss/style.scss";

const body = document.querySelector(".body");
const toggleButton = document.getElementById("toggleTheme");
const toggleSwitch = document.querySelector(".header__toggle-switch");
const nextTheme = document.getElementById("themeName");
const modeIndicator = document.querySelector(".modeIcon");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  toggleSwitch.classList.toggle("switch-on");
  toggleButton.classList.toggle("toggle-active");

  if (body.classList.contains("body-dark")) {
    nextTheme.textContent = "Dark";
    modeIndicator.src = "images/dark-mode.svg";
  } else {
    nextTheme.textContent = "Light";
    modeIndicator.src = "images/light-mode.svg";
  }
});
