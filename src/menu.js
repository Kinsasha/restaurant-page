import { clearPage } from "./index.js";
import applePie from "./asset/applePie.jpg";
import pumpkinPie from "./asset/pumpkin-pie-7620902.jpg";
import blueberryPie from "./asset/blueberryPie.jpg";
import chicken from "./asset/chicken-2443901.jpg";
import chocolatePie from "./asset/chocolatePie2.jpg";
import beefPie from "./asset/beefPie.jpg";

const menu = () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  const menuObj = [
    {
      name: "Apple Pie",
      description:
        "A classic dessert made with tender, cinnamon-spiced apples baked in a flaky, golden crust, served warm for a comforting homemade taste.",
      price: "$30",
      url: applePie,
    },
    {
      name: "Beef Pie",
      description:
        "Savory minced beef cooked in rich seasoning, wrapped in a golden, flaky crust for a hearty, satisfying bite.",
      price: "$60",
      url: beefPie,
    },
    {
      name: "Blueberry Pie",
      description:
        "Juicy blueberries simmered to perfection in a lightly sweetened filling, baked in a crisp, buttery crust.",
      price: "$30",
      url: blueberryPie,
    },
    {
      name: "Chocolate Pie",
      description:
        "A smooth, creamy chocolate filling set in a crunchy pastry base, finished for a rich and indulgent treat.",
      price: "$30",
      url: chocolatePie,
    },
    {
      name: "Pumpkin Pie",
      description:
        "Fall does not have to be down. Halloween does not have to be scary. With this pumpkin pie",
      price: "$40",
      url: pumpkinPie,
    },
    {
      name: "Fried Chicken",
      description: "Because, why not?",
      price: "$80",
      url: chicken,
    },
  ];

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  const headText = document.createElement("p");
  headText.classList.add("headText");
  headText.textContent = "The Menu";

  menuContainer.append(headText, cardContainer);

  menuObj.forEach((menu) => {
    const card = document.createElement("div");

    const name = document.createElement("p");
    const description = document.createElement("p");
    const price = document.createElement("button");

    card.classList.add("card");
    name.classList.add("name");
    description.classList.add("description");
    price.classList.add("price");

    name.textContent = menu.name;
    description.textContent = menu.description;
    price.textContent = menu.price;
    card.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${menu.url})`;

    card.append(name, description, price);
    cardContainer.append(card);

    // card.console.log(menu);
  });

  content.append(menuContainer);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.append(footer);
};

const goToMenu = () => {
  clearPage();
  menu();
};

export default goToMenu;
