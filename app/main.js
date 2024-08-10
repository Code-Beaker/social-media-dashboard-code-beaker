import "./typeScale.css";
import "./scss/style.scss";
import lightMode from "./images/light-mode.svg";
import darkMode from "./images/dark-mode.svg";

const body = document.querySelector(".body");
const toggleButton = document.getElementById("toggleTheme");
const toggleSwitch = document.querySelector(".header__toggle-switch");
const nextTheme = document.getElementById("themeName");
const modeIndicator = document.querySelector(".header__toggle-indicator");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  toggleSwitch.classList.toggle("switch-on");
  toggleButton.classList.toggle("toggle-active");

  if (body.classList.contains("body-dark")) {
    nextTheme.textContent = "Dark";
    modeIndicator.setAttribute("src", darkMode);
  } else {
    nextTheme.textContent = "Light";
    modeIndicator.setAttribute("src", lightMode);
  }
});
