let ballTemeDark = document.querySelector('.button-case')
let ball = document.querySelector('.ball')
let raizSite = document.documentElement

ballTemeDark.addEventListener('click', () => {
    ballTemeDark.classList.toggle('dark')
    ball.classList.toggle('dark')
    raizSite.classList.toggle('dark')

    localStorage.setItem ("darkMode", "on")
})

var buttonMenu = document.getElementById('menu-hamburguer')
var ulHamburguer = document.getElementById('ul-hamburguer')

buttonMenu.addEventListener("click", ()=>{
    ulHamburguer.classList.toggle('open')

})