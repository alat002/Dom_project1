// Select all necessary elements
const cards = document.querySelectorAll(".card");

// Function to update total price
function updateTotal() {
    let total = 0;
    cards.forEach(card => {
        const price = parseFloat(card.querySelector(".unit-price").innerText);
        const quantity = parseInt(card.querySelector(".quantity").innerText);
        total += price * quantity;
    });
    document.querySelector(".total").innerText = total + " $";
}

// Loop through each card to add event listeners
cards.forEach(card => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const likeBtn = card.querySelector(".fa-heart");
    const quantityDisplay = card.querySelector(".quantity");

    // Increase quantity
    plusBtn.addEventListener("click", () => {
        quantityDisplay.innerText = parseInt(quantityDisplay.innerText) + 1;
        updateTotal();
    });

    // Decrease quantity
    minusBtn.addEventListener("click", () => {
        if (parseInt(quantityDisplay.innerText) > 0) {
            quantityDisplay.innerText = parseInt(quantityDisplay.innerText) - 1;
            updateTotal();
        }
    });

    // Delete item
    deleteBtn.addEventListener("click", () => {
        card.parentElement.remove(); // Remove the .card-body wrapper
        updateTotal();
    });

    // Like item
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked"); // Add CSS class to change color
    });
});

// Initialize total
updateTotal();
