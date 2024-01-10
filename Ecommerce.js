document.addEventListener('DOMContentLoaded', function () {
    // Sample product data
    const products = [
        { id: 1, name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
        { id: 2, name: 'Smartphone', price: 599.99, image: 'smartphone.jpg' },
        { id: 3, name: 'Headphones', price: 99.99, image: 'headphones.jpg' },
    ];

    const productsContainer = document.getElementById('products');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Populate product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-img';

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', function () {
            // Add product to the cart
            addToCart(product);
        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(addToCartBtn);

        productsContainer.appendChild(card);
    });

    const cart = {
        items: [],
        total: 0,
    };

    function addToCart(product) {
        // Add the product to the cart
        cart.items.push(product);
        // Update the total price
        cart.total += product.price;
        // Update the cart UI
        updateCartUI();
    }

    function updateCartUI() {
        // Update the cart count
        cartCount.textContent = cart.items.length;

        // Clear the cart items container
        cartItemsContainer.innerHTML = '';

        // Populate the cart items
        cart.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <p>${item.name}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Update the total price
        cartTotal.textContent = `$${cart.total.toFixed(2)}`;
    }
});
