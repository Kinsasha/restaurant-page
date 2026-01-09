import "./styles.css";
import layout from "./layout.js";
import goToMenu from "./menu.js";

const clearPage = () => {
  // navBar.replaceChildren();
  content.replaceChildren();
};

goToMenu();
// layout();

console.log("Restaurant Page loaded");

document.addEventListener("click", (e) => {
  if (e.target.matches(".textBtn") || e.target.matches(".menuBtn")) {
    goToMenu();
  }
});
export { clearPage };
