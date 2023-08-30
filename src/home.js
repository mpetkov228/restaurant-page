const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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

    const hours = createElement('div', { classes: ['content-info'] });

    const h2 = createElement('h2', { content: 'Hours' });
    hours.appendChild(h2);

    for (let day of days) {
        let time = '8am - 10pm';
        
        if (day == 'Saturday' || day == 'Sunday') {
            time = '10am - 10pm';
        }

        const element = createElement('p', { content: `${day}: ${time}`});

        hours.appendChild(element);
    }
    
    const location = createElement('div', { classes: ['content-info'] });

    const locationH2 = createElement('h2', { content: 'Location' });
    location.appendChild(locationH2);

    const locationP = createElement('p', { content: '601 N 7th St, Sacramento, California' });
    location.appendChild(locationP);

    div.appendChild(h1);
    div.appendChild(hours);
    div.appendChild(location);

    contentDiv.appendChild(div);
}