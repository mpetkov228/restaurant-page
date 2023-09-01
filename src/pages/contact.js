import { createElement } from "../utils/utils";

function createContactDiv(contactInfo, title) {
    const contentInfo = createElement('div', { classes: ['content-info'] });

    const h2 = createElement('h2', { content: title });
    contentInfo.appendChild(h2);

    for (let info of contactInfo) {
        const p = createElement('p', { content: info });
        contentInfo.appendChild(p);
    }

    return contentInfo;
}

export function loadContact(contentDiv) {
    contentDiv.replaceChildren();

    const div = createElement('div', { classes: ['container'] });
    div.style.paddingBottom = '70px';

    const phoneDiv = createContactDiv(['+262-162-1585', '+262-514-3214'], 'Phone');
    const emailDiv = createContactDiv(['mickysburgers@yahoo.com'], 'Email');

    div.appendChild(phoneDiv);
    div.appendChild(emailDiv);

    contentDiv.appendChild(div);
}