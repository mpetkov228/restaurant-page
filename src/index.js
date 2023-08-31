import { loadHome } from './pages/home';
import { loadMenu } from './pages/menu';

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
    loadMenu(contentDiv);
}

function contactHandler() {
    
}

loadHome(contentDiv);