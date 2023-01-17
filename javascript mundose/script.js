let nombre = "agustin"
let edad = 24
let viveEnLatinoamerica = true

console.log( nombre, edad, viveEnLatinoamerica)

let edad = prompt('que edad tenes?')

if (edad < 16){
    alert('No puedes pasar')
    else if (edad >= 18) {
        alert('Puede pasar')
    }
    else (edad > 21) {
        alert('ya eres muy grande para pasar')
    }
}