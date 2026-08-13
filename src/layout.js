import logo from "./asset/silverware-fork-knife.svg";
import background from "./asset/pie-6563696.jpg";
import sideImg from "./asset/pumpkin-pie-7620902.jpg";
import goToMenu from "./menu";
import { clearPage } from ".";

const layout = () => {
  const body = document.querySelector("body");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const btnContainer = document.createElement("div");

  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  contactBtn.classList.add("contactBtn");
  btnContainer.classList.add("btnContainer");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  const navBar = document.querySelector("nav");
  const homeLogo = document.createElement("div");
  const logoImg = document.createElement("span");
  const logoName = document.createElement("p");
  const logoContainer = document.createElement("div");

  homeLogo.classList.add("homeLogo");
  logoImg.classList.add("logoImg");
  logoName.classList.add("logoName");
  logoContainer.classList.add("logoContainer");

  logoImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <title>food</title>
      <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
    </svg>`;
  logoName.textContent = "Restaurant Rome";

  homeLogo.append(logoImg);
  logoContainer.append(homeLogo, logoName);
  btnContainer.append(homeBtn, menuBtn, contactBtn);
  navBar.replaceChildren();
  navBar.append(logoContainer, btnContainer);

  const content = document.querySelector("#content");
  const backgroundContainer = document.createElement("div");
  // const secondImageContainer = document.createElement("div");
  const backgroundImg = document.createElement("div");
  backgroundContainer.classList.add("backgroundContainer", "first");
  // secondImageContainer.classList.add("backgroundContainer", "second");
  backgroundImg.classList.add("backgroundImg");

  backgroundImg.style.backgroundImage = `url(${sideImg})`;

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
  backgroundContainer.append(textContainer, backgroundImg);
  // secondImageContainer.append(backgroundImg);
  content.append(backgroundContainer);
};

export default layout;
