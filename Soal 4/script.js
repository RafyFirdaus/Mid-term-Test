document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
     // Tambahkan validasi untuk setiap input

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('error');
    
    let errorMessage = '';


    if (name === '') {
        errorMessage += 'Nama tidak boleh kosong. ';
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Email harus valid. ';
    }

    
    if (message.length < 20) {
        errorMessage += 'Pesan minimal 20 karakter. ';
    }

   
    if (errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.style.color = 'red';
    } else {
        errorElement.textContent = 'Form submitted successfully!';
        errorElement.style.color = 'green';
        
    }
});
