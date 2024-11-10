function Demo(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = 'Home.html';
    } else {
        alert('Invalid credentials');
    }
}