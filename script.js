const products = [
    { name: "Pia de Aço Inox", price: "R$ 300,00", image: "pia-de-inox-1.jpg" },
    { name: "Pia de Mármore", price: "R$ 500,00", image: "PIA_MARMORE_SINTETICO_PRETO.jpg_7.jpg" },
    { name: "Pia de Granito", price: "R$ 450,00", image: "Pia.jpg" },
    { name: "Pia de Cerâmica", price: "R$ 600,00", image: "th.jpg" },
    { name: "pia de cimento", price: "R$ 350,00" , image:"TQ-120-x-060.png"}
];

function displayProducts(container) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
        `;
        container.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('#catalog .product-list');
    if (productContainer) displayProducts(productContainer);
});
