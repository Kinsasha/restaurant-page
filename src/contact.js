import { clearPage } from "./index.js";

const goToContact = () => {
  clearPage();

  const content = document.querySelector("#content");

  const container = document.createElement("div");
  const contactContainer = document.createElement("div");
  const contactText = document.createElement("p");
  const contactText2 = document.createElement("p");
  const headText = document.createElement("p");

  container.classList.add("container");
  contactContainer.classList.add("contactContainer");
  contactText.classList.add("contactText", "contactText1");
  contactText2.classList.add("contactText", "contactText2");
  headText.classList.add("headText");

  headText.textContent = "Contact Us";
  contactText.textContent =
    "Contact us via Email @ kennedyokechukwu203@gmail.com";
  contactText2.textContent = "Contact us via Github @ github.com/Kinsasha";

  contactContainer.append(contactText, contactText2);
  container.append(headText, contactContainer);
  content.append(container);
};

export default goToContact;
