document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const username = document.getElementById('username').value;
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    // Validasi username dan password
    if (username && password) {
        // Validasi email atau nomor telepon
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola untuk email
        const phonePattern = /^\d{12}$/; // Pola untuk nomor telepon 12 digit

        if (!emailPattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
            alert('Please enter a valid email address or a 12-digit phone number');
            return;
        }

        // Jika signup berhasil, ganti URL ke halaman baru
        window.location.href = 'Login.html'; 
    } else {
        alert('Please fill in all fields');
    }
});