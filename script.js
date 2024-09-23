document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach((product, index) => {
        // Delay animasi berdasarkan urutan produk
        product.style.animationDelay = `${index * 0.2}s`;
        product.style.opacity = 1; // Setelah animasi dimulai, set opacity ke 1
    });

    document.querySelectorAll('.more-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            product.classList.add('active'); // Tambahkan kelas 'active' untuk animasi

            setTimeout(() => {
                alert('More details coming soon!');
                product.classList.remove('active'); // Hapus kelas 'active' setelah alert
            }, 300); // Durasi animasi
        });
    });
});