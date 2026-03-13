/**
 *
 * @param {HTMLElement} div
 */
export function buildHome(div) {
  div.innerHTML = `<h1>Mon restaurant</h1>
    <div class="img-container">
    <img src="/home-fig1.jpg" alt="une photo de pizza" />
    </div>
    <p class="home-content">Ceci est mon restaurant </p>
    `;
}
