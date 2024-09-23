document.getElementById('menuToggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '' ? 'block' : 'none';
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Ganti 'halaman-baru.html' dengan URL halaman yang ingin dituju
    window.location.href = 'index.html';
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