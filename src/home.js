export function loadHome(contentDiv) {
    contentDiv.replaceChildren();

    const div = document.createElement('div');
    div.classList.add('container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Micky\'s Burgers';
    h1.classList.add('content-heading');

    const hours = document.createElement('div');
    hours.classList.add('content-hours');

    const h2 = document.createElement('h2');
    h2.textContent = 'Hours';
    hours.appendChild(h2);

    const monday = document.createElement('p');
    monday.textContent = 'Monday: 8am - 10pm';
    hours.appendChild(monday);

    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 8am - 10pm';
    hours.appendChild(tuesday);

    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 8am - 10pm';
    hours.appendChild(wednesday);

    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 8am - 10pm';
    hours.appendChild(thursday);

    const friday = document.createElement('p');
    friday.textContent = 'Friday: 8am - 10pm';
    hours.appendChild(friday);

    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 8am - 10pm';
    hours.appendChild(saturday);

    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 8am - 10pm';
    hours.appendChild(sunday);

    div.appendChild(h1);
    div.appendChild(hours);

    contentDiv.appendChild(div);
}