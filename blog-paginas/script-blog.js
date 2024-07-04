var ballTemeDark = document.querySelector('.button-case')

ballTemeDark.addEventListener('click', () => {

    let ball = document.querySelector('.ball')
    let raizSite = document.documentElement

    ballTemeDark.classList.toggle('dark')
    ball.classList.toggle('dark')
    raizSite.classList.toggle('dark')

    localStorage.setItem("darkMode", "on")
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