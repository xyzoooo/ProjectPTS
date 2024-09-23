document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const emailOrPhone = document.getElementById('emailOrPhone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validasi input
    if (emailOrPhone === "" || password === "") {
        alert('Please fill in all fields');
        return;
    }

    // Pola untuk validasi email dan nomor telepon
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola untuk email
    const phonePattern = /^\d{12}$/; // Pola untuk nomor telepon 12 digit

    // Memeriksa apakah input sesuai dengan salah satu pola
    if (!emailPattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
        alert('Please enter a valid email address or a 12-digit phone number');
        return;
    }

    // Jika login berhasil, ganti URL ke halaman baru
    window.location.href = 'Halaman_index.html'; // Ganti dengan halaman yang diinginkan
});