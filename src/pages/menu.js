import { createElement } from "../utils/utils";

export function loadMenu(contentDiv) {
    contentDiv.replaceChildren();

    const container = createElement('div', { classes: ['container'] });

    const burgersContainer = createElement('div', { classes: ['content-info'] });

    const h2 = createElement('h2', { content: 'Burgers' });
    burgersContainer.appendChild(h2);

    const burgerCard = createElement('div', { classes: ['menu-card'] });

    const burger1 = createElement('img', {
        src: '../src/assets/burgers/cheeseburger.jpg',
        classes: ['menu-item'],
    });
    burgerCard.appendChild(burger1);
    burgersContainer.appendChild(burgerCard);

    container.appendChild(burgersContainer);

    contentDiv.appendChild(container);
}