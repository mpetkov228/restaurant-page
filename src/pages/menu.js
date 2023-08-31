import { createElement } from "../utils/utils";

const burgers = [
    {
        name: 'Cheeseburger',
        src: '../src/assets/burgers/cheeseburger.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a> on <a href="https://unsplash.com/photos/E94j3rMcxlw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        name: 'Double Cheeseburger',
        src: '../src/assets/burgers/double-cheese.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/sc5sTPMrVfk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        name: 'Chicken Burger',
        src: '../src/assets/burgers/fried-chicken.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@sultan1274?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sultan Abdulrazzaq</a> on <a href="https://unsplash.com/photos/UDYjeBwFZf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        name: 'Veggie Burger',
        src: '../src/assets/burgers/veggie.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@swimstaralex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Sinn</a> on <a href="https://unsplash.com/photos/aDhU6A0IAbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        name: 'Club Sandwich',
        src: '../src/assets/burgers/club-sandwich.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/photos/IZ0LRt1khgM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
];

const sides = [
    {
        name: 'French Fries',
        src: '../src/assets/sides/fries.jpg',
        imgCredit: 'Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/photos/vi0kZuoe0-8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        name: 'Coleslaw',
        src: '../src/assets/sides/coleslaw.jpg',
        imgCredit: 'Photo by <a href="https://pixabay.com/users/wow_pho-916237/">Wow_Pho</a> on <a href="https://pixabay.com/photos/appetizer-background-bowl-cabbage-1223853/">Pixabay</a>'
    }
];

function createCard(item) {
    const card = createElement('div', { classes: ['menu-card'] });

    const itemImg = createElement('img', {
        src: item.src,
        classes: ['menu-item']
    });
    const itemName = createElement('h3', { content: item.name });
    const itemImgCredit = createElement('p', { classes: ['credit-text'] });
    itemImgCredit.innerHTML = item.imgCredit;

    card.appendChild(itemImg);
    card.appendChild(itemName);
    card.appendChild(itemImgCredit);

    return card;
}

export function loadMenu(contentDiv) {
    contentDiv.replaceChildren();

    const container = createElement('div', { classes: ['container'] });

    const burgersContainer = createElement('div', { classes: ['content-info'] });

    const h2 = createElement('h2', { content: 'Burgers' });
    burgersContainer.appendChild(h2);

    for (let burger of burgers) {
        const card = createCard(burger);

        burgersContainer.appendChild(card);
    }

    container.appendChild(burgersContainer);

    const sidesContainer = createElement('div', { classes: ['content-info'] });

    const h2Sides = createElement('h2', { content: 'Sides' });
    sidesContainer.appendChild(h2Sides);

    for (let side of sides) {
        const card = createCard(side);

        sidesContainer.appendChild(card);
    }
    
    container.appendChild(sidesContainer);

    contentDiv.appendChild(container);
}