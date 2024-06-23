const menuHamburguer = document.getElementById('menu-hamburguer')
const sectionHamburguer = document.getElementById('section-hamburguer')

menuHamburguer.addEventListener("click", () => 
sectionHamburguer.classList.toggle('active'))

/*Dentro de menuOptions Para cada (for each) menuOptions será
adicionado um addEventListener com a função click executando o {}*/ 

const menuOptions = document.querySelectorAll('.menu-options')


menuOptions.forEach(menuOptions => {
    menuOptions.addEventListener("click", () => {
        sectionHamburguer.classList.toggle('active');
    });
});