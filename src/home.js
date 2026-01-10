import { clearPage } from "./index.js";
import background from "./asset/pie-6563696.jpg";
import sideImg from "./asset/pumpkin-pie-7620902.jpg";
import layout from "./layout.js";

const goToHome = () => {
  clearPage();

  const body = document.querySelector("body");

  const content = document.querySelector("#content");
  const backgroundContainer = document.createElement("div");
  const backgroundImg = document.createElement("img");
  backgroundContainer.classList.add("backgroundContainer");
  backgroundImg.classList.add("backgroundImg");

  backgroundImg.src = sideImg;

  const textContainer = document.createElement("div");
  const textHeader = document.createElement("h1");
  const textPara = document.createElement("p");
  const textBtn = document.createElement("button");

  textContainer.classList.add("textContainer");
  textHeader.classList.add("textHeader");
  textPara.classList.add("textPara");
  textBtn.classList.add("textBtn");

  textContainer.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`;
  textHeader.textContent = "Rome Pies";
  textPara.textContent = `Your no. 1 go-to for pies that will make your day, baked fresh with the finest ingredients and a whole lot of love. Every bite is packed with rich flavor and perfect texture, whether you are craving something sweet or savory. 
    From classic favorites to exciting new creations, there’s always a pie waiting to brighten your moment.`;
  textBtn.textContent = "Go To Menu";

  textContainer.append(textHeader, textPara, textBtn);
  backgroundContainer.append(backgroundImg);
  content.append(textContainer, backgroundContainer);

  const footer = document.createElement("div");
  footer.classList.add("footer");

  body.append(footer);
};

export default goToHome;
