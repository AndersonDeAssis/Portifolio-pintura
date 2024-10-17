var ballTemeDark = document.querySelector('.button-case')

ballTemeDark.addEventListener('click', () => {

    let ball = document.querySelector('.ball')
    let raizSite = document.documentElement

    ballTemeDark.classList.toggle('dark')
    ball.classList.toggle('dark')
    raizSite.classList.toggle('dark')

    localStorage.setItem("darkMode", "on")
})

var buttonMenu = document.getElementById('menu-hamburguer')
let ulHamburguer = document.getElementById('ul-hamburguer')

buttonMenu.addEventListener("click", () => {
    ulHamburguer.classList.toggle('open')
})

var arrowTop = document.querySelector('.arrow-top')

window.addEventListener('scroll', ()=>{
    arrowTop.classList.toggle('active', window.scrollY > 100)
})

arrowTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

// a pagina sera carregada com essa opção em true
document.getElementById('radio1').checked = true
let cont = 1


setInterval(()=>{
    nextImage()
}, 6000)

function nextImage(){
    cont++
    if(cont > 2){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}