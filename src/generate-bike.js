export function generateBike(bike) {
    const li = document.createElement('li');
    li.setAttribute('class', bike.code);
    li.setAttribute('title', bike.name);

    const img = document.createElement('img');
    img.setAttribute('src', bike.image);
    img.setAttribute('alt', `image of ${bike.name}`);
    li.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = bike.name;
    li.appendChild(h3);

    const button = document.createElement('button');
    button.setAttribute('value', bike.code);
    button.textContent = 'Add to Cart';
    li.appendChild(button);

    const description = document.createElement('p');
    description.textContent = bike.description;
    li.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${bike.price}`;
    li.appendChild(price);

    return li;
}
