import figPizza1 from "./menu-fig1-pepperoni.jpg";
import figPizza2 from "./menu-fig2-mushrooms.jpg";
import figPizza3 from "./menu-fig3-tomato.jpg";
import "./menu.css";

const pizzas = {
  p0: {
    title: "Pizza Pepperoni",
    fig: figPizza1,
    desc: "Une pizza aux pepperoni",
    price: "15 €",
  },
  p1: {
    title: "Pizza Mushrooms",
    fig: figPizza2,
    desc: "Une pizza aux champignons",
    price: "14 €",
  },
  p2: {
    title: "Pizza Tomate",
    fig: figPizza3,
    desc: "Une pizza aux tomates cerises",
    price: "11 €",
  },
};

/**
 *
 * @param {HTMLElement} div
 */
export function buildMenu(div) {
  let htmlContent = "<h1>Menu</h1><ul>";
  for (let pizza in pizzas) {
    htmlContent += `<li>
    <div class="pizza-fig">
    <img src="${pizzas[pizza].fig}" alt="une photo de pizza" />
    </div>
    <div class="pizza-card">
    <h2 class="pizza-name">${pizzas[pizza].title}</h2>
    <p class="pizza-content">${pizzas[pizza].desc}</p>
    <p class="pizza-price">${pizzas[pizza].price}</p>
    </div>
    </li>`;
  }
  htmlContent += "</ul>";
  div.innerHTML = htmlContent;
}
