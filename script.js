// Log interaction or handle dynamic events here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Neon affiliate site loaded successfully.');

    // Example: Track clicks on affiliate buttons
    const buttons = document.querySelectorAll('.affiliate-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.closest('.product-card').querySelector('h3').innerText;
            console.log(`User clicked affiliate link for: ${productName}`);
        });
    });
});
