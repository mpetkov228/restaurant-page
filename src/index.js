import { loadContact } from './pages/contact';
import { loadHome } from './pages/home';
import { loadMenu } from './pages/menu';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const contentDiv = document.getElementById('content');
const listItems = document.querySelectorAll('li');

home.addEventListener('click', homeHandler);
menu.addEventListener('click', menuHandler);
contact.addEventListener('click', contactHandler);

function homeHandler() {
    loadHome(contentDiv);
    listItems.forEach(item => item.classList.remove('active'));
    home.classList.add('active');
}

function menuHandler() {
    loadMenu(contentDiv);
    listItems.forEach(item => item.classList.remove('active'));
    menu.classList.add('active');
}

function contactHandler() {
    loadContact(contentDiv);
    listItems.forEach(item => item.classList.remove('active'));
    contact.classList.add('active');
}

homeHandler();