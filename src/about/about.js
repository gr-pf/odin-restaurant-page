import aboutFig1 from "./about-fig1.jpg";

/**
 *
 * @param {HTMLElement} div
 */
export function buildAbout(div) {
  div.innerHTML = `
      <h1>Contact</h1>
      <div class="img-container">
        <img src="${aboutFig1}" alt="une photo de cart" />
      </div>
      <address>
        Vous pouvez nous retrouvez à cette adresse :<br />
        Ma super pizzeria<br />
        42 rue de la faim<br />
        Mountain View, CA 94043-0801<br />
        USA
      </address>
    `;
}
