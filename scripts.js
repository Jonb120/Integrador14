document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.producto input[type="checkbox"]');
    const totalSpan = document.getElementById('total');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let total = 0;
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    total += parseFloat(cb.getAttribute('data-precio'));
                }
            });
            totalSpan.textContent = total.toFixed(2);
        });
    });
});

function simularPedido() {
    const total = document.getElementById('total').textContent;
    alert(`Pedido realizado. Total: $${total}. Gracias por su compra.`);
}
