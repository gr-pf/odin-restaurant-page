import homeFig1 from "./home-fig1.jpg";

/**
 *
 * @param {HTMLElement} div
 */
export function buildHome(div) {
  div.innerHTML = `
      <h1>Mon restaurant</h1>
      <div class="img-container">
        <img src="${homeFig1}" alt="une photo de pizza" />
      </div>
      <p class="home-content">Ceci est mon restaurant</p>
    `;
}
