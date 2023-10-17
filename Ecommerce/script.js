document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".product-card");
    const cartTotalElement = document.getElementById("cart-total");
    const addToCartButtons = document.querySelectorAll(".btn-cart");

    // Initialize cart total
    let cartTotal = 0;

    // Add click event to product cards
    productCards.forEach(function(productCard) {
        const priceElement = productCard.querySelector(".product-price");
        const productName = productCard.querySelector("h3").textContent;
        const price = parseFloat(priceElement.textContent.substring(1));

        const addToCartButton = productCard.querySelector(".btn-cart");
        addToCartButton.addEventListener("click", function() {
            cartTotal += price;
            updateCartTotal(cartTotal);
            addToCartButton.disabled = true;
            addToCartButton.textContent = "Added to Cart";
        });
    });

    // Function to update cart total
    function updateCartTotal(total) {
        cartTotalElement.textContent = `Cart Total: $${total.toFixed(2)}`;
    }
});
