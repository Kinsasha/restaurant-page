import logo from "./asset/silverware-fork-knife.svg";
import background from "./asset/pie-6563696.jpg";
import sideImg from "./asset/pumpkin-pie-7620902.jpg";
import goToMenu from "./menu";

const layout = () => {
  const body = document.querySelector("body");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const btnContainer = document.querySelector(".btnContainer");

  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  contactBtn.classList.add("contactBtn");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  const navBar = document.querySelector("nav");
  const homeLogo = document.createElement("div");
  const logoImg = document.createElement("img");
  const logoName = document.createElement("p");
  const logoContainer = document.createElement("div");

  homeLogo.classList.add("homeLogo");
  logoImg.classList.add("logoImg");
  logoName.classList.add("logoName");
  logoContainer.classList.add("logoContainer");

  logoImg.src = logo;
  logoName.textContent = "Restaurant Rome";

  homeLogo.append(logoImg);
  logoContainer.append(homeLogo, logoName);
  btnContainer.append(homeBtn, menuBtn, contactBtn);
  navBar.prepend(logoContainer);
  navBar.append(btnContainer);

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

export default layout;
