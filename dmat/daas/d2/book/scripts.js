function calculateBill() {
    const bookPrices = [15, 20, 12];
    const quantities = document.querySelectorAll('input[type="number"]');
    let totalAmount = 0;

    quantities.forEach((quantity, index) => {
        const qty = parseInt(quantity.value);
        totalAmount += qty * bookPrices[index];
    });

    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount}`;
}
