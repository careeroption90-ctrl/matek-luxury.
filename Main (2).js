// Matek Luxury Suite - Global Logic
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // Attach event listener to "Add to Cart" buttons
    const addBtn = document.querySelector('.add-to-cart-btn'); // Add this class to your button
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addToCart();
            showNotification("Added to Collection");
        });
    }
});

function addToCart() {
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    count++;
    localStorage.setItem('cartCount', count);
    updateCartUI();
}

function updateCartUI() {
    const cartIcons = document.querySelectorAll('.cart-count');
    const count = localStorage.getItem('cartCount') || 0;
    
    cartIcons.forEach(icon => {
        icon.textContent = `Cart (${count})`;
    });
}

// Luxury Toast Notification
function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-10 right-10 bg-[#D4AF37] text-black px-6 py-3 font-bold tracking-widest text-xs uppercase shadow-2xl animate-bounce';
    toast.style.zIndex = "9999";
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
