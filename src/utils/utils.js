export function createElement(type, options) {
    const element = document.createElement(type);

    if (options.content) {
        element.textContent = options.content;
    }

    if (options.classes) {
        element.classList.add(...options.classes);
    }

    return element;
}