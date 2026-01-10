import { clearPage } from "./index.js";

const menu = () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  const menuObj = [
    {
      // name: pie,
      // description: pie,
      // price: pie,
      // url: pie,
    },
  ];
  // const backgroundContainer = document.createElement("div");
  // const backgroundImg = document.createElement("img");
  // backgroundContainer.classList.add("backgroundContainer");
  // backgroundImg.classList.add("backgroundImg");
  // backgroundImg.src = sideImg;
  // const textContainer = document.createElement("div");
  // const textHeader = document.createElement("h1");
  // const textPara = document.createElement("p");
  // const textBtn = document.createElement("button");
  // textContainer.classList.add("textContainer");
  // textHeader.classList.add("textHeader");
  // textPara.classList.add("textPara");
  // textBtn.classList.add("textBtn");
  // textContainer.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`;
  // textHeader.textContent = "Rome Pies";
  // textPara.textContent = ``;
  // textBtn.textContent = "Go To Menu";
  // textContainer.append(textHeader, textPara, textBtn);
  // backgroundContainer.append(backgroundImg);
  // // content.append(textContainer, backgroundContainer);
  const footer = document.createElement("div");
  footer.classList.add("footer");
  body.append(footer);
};

const goToMenu = () => {
  clearPage();
  menu();
};

export default goToMenu;
