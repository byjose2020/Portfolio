const container = document.getElementById('container')
const btnRegister = document.getElementById('login')
const btnLogin = document.getElementById('register')

btnRegister.addEventListener('click', () =>{
    container.classList.add("right-panel-active")
});

btnLogin.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
})