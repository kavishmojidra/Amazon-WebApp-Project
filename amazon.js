// CART FUNCTIONALITY
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartDisplay.innerText = cartCount;
    });
});


// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    products.forEach((product) => {
        let text = product.innerText.toLowerCase();
        product.style.display = text.includes(value) ? "block" : "none";
    });
});


// HOVER EFFECT 
products.forEach((product) => {
    product.addEventListener("mouseover", () => {
        product.style.transform = "scale(1.05)";
        product.style.transition = "0.3s";
    });

    product.addEventListener("mouseout", () => {
        product.style.transform = "scale(1)";
    });
});


// BACK TO TOP BUTTON
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// SIMPLE ALERT FOR SIGN-IN (optional UX)
const signIn = document.querySelector(".nav-sign");

signIn.addEventListener("click", () => {
    alert("Sign-in functionality not implemented (UI demo project)");
});
