const moviesArray = ["Volver al futuro", "Avatar" , "Terminator"]
console.log("el arreglo tiene el largo de " + moviesArray.length)

moviesArray.push ("Avengers")

console.log ("el arreglo tiene el largo de " + moviesArray.length)

for(let i=0;i<moviesArray.length; i++){
    console.log(moviesArray[i] + " esta " +(i+1) + " en mi lista de peliculas favoritas")
}

const ejercicio1 = {
    nombre: "agustin",
    edad: 23,
    ciudad: "El Bolson",
    bandasFavoritas : ["Aerosmith","Guns & Roses","Queen","Ac Dc",]
}

console.log(ejercicio1.nombre)
console.log(ejercicio1.edad)
console.log(ejercicio1.ciudad)
console.log(ejercicio1.bandasFavoritas[0])

console.log(ejercicio1["nombre"])
console.log(ejercicio1["edad"])
console.log(ejercicio1["ciudad"])
console.log(ejercicio1["bandasFavoritas"])

const arrayNombres = ["valentina", "sofia", "agustin", "carlos", "fabiana"]

console.log(arrayNombres)
console.log(arrayNombres.slice(1,4))

const arrayNombresNumeros = arrayNombres.map(function(number){
    return number.length
})
console.log(arrayNombresNumeros)

arrayNombres.forEach(function(names){
    return console.log(names)
})

const terminadoEnA = arrayNombres.filter(function(names){
    return names[names.length-1] === "a"
})
console.log(terminadoEnA)

let nombre= prompt("Cual es tu nombre?")
let gen= prompt("cual es tu genero? Si es masculino escribi M, si es femenino escribi F, si es otro escribi X")

//if (gen==="f") {
    //alert("Bienvenida puedes continuar bella dama")
//} else if (gen==="m"){
    //alert("Bienvenido puedes continuar bello caballero")
//} else
//alert("Bienvenidx puedxs continuar bellx personx")

switch(gen){
    case "m" : alert("Bienvenido pudes pasar")
    break;

    case "f" :  alert("Bienvenida pudes pasar")
    break;

    case "x" : alert("Bienvenidx pudes pasar")
    break;

}

const autos = ["bmw", "mercedes", "renault", "toyota", "nissan", "lambo", "ferrari"]

for (let i = 0 ; i < autos.length; i++){
    console.log(autos[i])
}

