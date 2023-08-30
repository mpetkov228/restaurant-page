import { loadHome } from './home.js';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const contentDiv = document.getElementById('content');

home.addEventListener('click', homeHandler);
menu.addEventListener('click', menuHandler);
contact.addEventListener('click', contactHandler);

function homeHandler() {
    loadHome(contentDiv);
}

function menuHandler() {

}

function contactHandler() {
    
}

loadHome(contentDiv);