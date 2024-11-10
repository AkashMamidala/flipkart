const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password =document.querySelector('#password').value;
    const mobile =  document.querySelector('#mobile').value;

    localStorage.setItem('user', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('mobile', mobile);

    alert('Signup successful! Data stored in local storage.');
    window.location.href = 'FB.html';

});