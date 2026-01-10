import "./styles.css";
import layout from "./layout.js";
import goToMenu from "./menu.js";
import goToHome from "./home.js";
import goToContact from "./contact.js";

const clearPage = () => {
  content.replaceChildren();
};

// goToMenu();
layout();

document.addEventListener("click", (e) => {
  if (e.target.matches(".textBtn") || e.target.matches(".menuBtn")) {
    goToMenu();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".homeBtn")) {
    goToHome();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".contactBtn")) {
    goToContact();
  }
});
export { clearPage };
