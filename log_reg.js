function showForm(type) {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');

    if (type==='registerForm'){
        document.getElementById('registerForm').classList.remove('d-none');
    } else if (type==='loginForm'){
        document.getElementById('loginForm').classList.remove('d-none');
    }

}