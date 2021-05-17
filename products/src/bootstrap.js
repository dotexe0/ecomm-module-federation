import('faker');
import faker from 'faker';

const mount = (htmlElement) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    htmlElement.innerHTML = products;

};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector(('#dev-products'));
    if (el) {
        mount(el);
    }
}

export {mount};
