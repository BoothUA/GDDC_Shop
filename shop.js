let cart = [];
let currentBalance = 500;  // Fixed BlueCoins balance of 500

// Function to add items to the cart
function addToCart(serviceName, price) {
    cart.push({ name: serviceName, price: price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountElem = document.getElementById('total-amount');
    const currentBalanceElem = document.getElementById('current-balance');

    cartItemsList.innerHTML = ''; // Clear existing items
    let totalAmount = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} BlueCoins `;

        // Create a button to remove this specific item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);

        cartItemsList.appendChild(listItem);
        totalAmount += item.price;
    });

    totalAmountElem.textContent = totalAmount;
    currentBalanceElem.textContent = currentBalance;
}

// Function to remove a specific item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to remove all items from the cart
function removeAllFromCart() {
    cart = [];
    updateCart();
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    if (totalAmount > currentBalance) {
        alert('Not enough BlueCoins!');
    } else {
        currentBalance -= totalAmount;
        cart = [];
        updateCart();
        alert('Checkout successful!');
    }
}
