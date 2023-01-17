const nav = document.querySelector('.navbar')

window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', window.scrollY >0)
})

let contrasena = prompt('contraena?')
let numero = 1234

if (contrasena == numero){
    alert('Bienvenido puedes pasar')
} else {
    alert('contrasena incorrecta')
}

let nombre = 'agustin'
let frase = `mi nombre es ${nombre}`

document.write (frase)