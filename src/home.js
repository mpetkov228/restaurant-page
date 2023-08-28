export function loadHome(contentDiv) {
    contentDiv.replaceChildren();

    const h1 = document.createElement('h1');
    h1.textContent = 'MY RESTAURANT';

    const img = document.createElement('img');
    img.src = '../pasta.jpg';

    const p = document.createElement('p');
    p.textContent = 'Welcome to my restaurant. We\'ve just opened and are serving all kinds of delicious food. Come on in and have a lovely time.'

    contentDiv.appendChild(h1);
    contentDiv.appendChild(img);
    contentDiv.appendChild(p);
}