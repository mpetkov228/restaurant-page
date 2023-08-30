function createElement(type, options) {
    const element = document.createElement(type);

    if (options.content) {
        element.textContent = options.content;
    }

    if (options.classes) {
        element.classList.add(...options.classes);
    }

    return element;
}

export function loadHome(contentDiv) {
    contentDiv.replaceChildren();

    const div = createElement('div', { classes: ['container'] });

    const h1 = createElement('h1', {
        content: 'Micky\'s Burgers',
        classes: ['content-heading'],
    });

    const hours = document.createElement('div');
    hours.classList.add('content-info');

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
    saturday.textContent = 'Saturday: 10am - 10pm';
    hours.appendChild(saturday);

    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 10am - 10pm';
    hours.appendChild(sunday);
    
    const location = document.createElement('div');
    location.classList.add('content-info');

    const locationH2 = document.createElement('h2');
    locationH2.textContent = 'Location';
    location.appendChild(locationH2);

    const locationP = document.createElement('p');
    locationP.textContent = '601 N 7th St, Sacramento, California';
    location.appendChild(locationP);

    div.appendChild(h1);
    div.appendChild(hours);
    div.appendChild(location);

    contentDiv.appendChild(div);
}