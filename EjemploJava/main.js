/*Sintaxis del lenguaje variables y tipos de datos*/
console.log("Funcionando...")
//definir una variable version antigua
var numero= 10
//definir una variable version actual
let num1; //si no se indica nada el valor de la variable es indefinido
let num2= null //variable nula
//variable definida
let entero= 10 
let decimal= 1.2
let string= "Hola Mundo"
let booleano= false
let fecha= new Date()
let dd= fecha.getDate(),
    mm= fecha.getMonth()+1,
    aa= fecha.getFullYear(),
    hoy= `${aa}-${mm}-${dd}`
//definir una constante
const pi= 3.1416
//presentacion por consola
console.log("Numero 1=", num1)
console.log(`Numero 2= ${num2}`)
console.log(`fecha hoy= ${fecha}`)
console.log(hoy)
//arreglos
let numeros= [1, 2, 3, 4, 5]
let colores= ["red", "green", "blue"]
//json(diccionarios)
const json= {"Nombres":["Guillermo", "Alejandro"],
             "Genero":"Masculino",
            "Estatura(m)": 1.68}
//Objeto
const Profesor= {Nombre: "Daniel",
                genero: "Masculino",
                Juegos: ["Futbol", "Basquet"],
                Conocimientos: {Lenguajes:["JS", "Python", "Java", "PHP"],
                                Materias: {Nivel1:"logica", 
                                           Nivel2:"POO", 
                                           Nivel3: "POOI"}
                               }                }
//modificar: json(diccionario) u objetos
json["Estatura(m)"]= 1.70
Profesor.Nombre= "Daniel Alexander"
Profesor.Edad= 50 //agregar campo
//acceder a la informacion: json(diccionario) u objetos
console.log("json(Estandar)",json)
console.log("json(Nombres)", json.Nombres)
console.log("Objet(Estandar)", Profesor)
console.log("Objeto(Conocimientos(POO))", Profesor.Conocimientos.Materias.Nivel1, Profesor.Conocimientos.Materias.Nivel2, Profesor.Conocimientos.Materias.Nivel3)
console.log("Objeto(Juegos)", Profesor.Juegos[0], Profesor.Juegos[1])

//estructuras de control o selectivas (if)
let n1=5
let n2=5
//estructuras condicionales simples
if (num1 === undefined)
    console.log(`${num1}=undefined`)
if (num2 === null)
    console.log(`${num2}=null`)
//estructuras condicionales compuestas
if (n1 === 0){
    console.log(num1)
} else if (n1 === n2){
    console.log(`${n1}=${n2}`)
}
else {
    console.log(`${n1}!=n2`)
}
//estructura condicional multiple o switch
let num= 7
let res= num % 2
switch (res){
    case 0:
        console.log(`${num} es un numero par`)
        break
    case 1:
        console.log(`${num} es un numero impar`)
        break
    default:
        if (isNaN(rec)) //funcion que me permite saber si una variable cuenta con un valor no valido
            console.log(`${rec}=Error`)
        break
}
//estructuras repetitibas/bucles
//while
let i= 0
console.log("bucle while",colores)
while (i< colores.length && colores[i]!="blue"){
    console.log(i, colores[i])
    i= i+1
}
//for
console.log("recorrido for incremento",colores)
for (let i= 0; i<colores.length; i++){
    console.log(i, colores[i])
}
//for utilizando in
console.log("uso del in",colores)
for (let j in colores){
    console.log(j, colores[j])
}
//los dos anteriores nos da la posicion
//of enun for
console.log("uso del of", colores)
for (let color of colores){
    console.log(color)
}
//el for ulimo da el valor
//uso del for en una cadena
nombre= "Alejandro"
for (let l of nombre){
    console.log(l)
}
//usando el for para recorrer un json(diccionario)
const Persona= [
    {"Nombre":"Veronica", "Apellido":"Garces"},
    {"Nombre":"Anthony", "Apellido":"Ortega"},
    {"Nombre":"Alejandro", "Apellido":"Restrepo"},
]
for (let na of Persona){
    console.log(na.Apellido, na.Nombre)
}
//each: recorrido de objetos ierables
console.log("ForEach")
Persona.forEach(NA => {if (NA.Nombre === "Anthony") 
                           console.log(NA.Nombre)
                      }
               )
//map
console.log("MAP")
const Persons= Persona.map(Na => Na.Nombre)
console.log(Persons)
//filter
console.log("FILTER")
const Per= Persona.filter(nA => nA.Apellido != "Ortega")
console.log(Per)
//find
console.log("FIND")
const P= Persona.find(P => P.Apellido === "Garces")
console.log(P)
//Funciones
//funcion suma
function Sumar(){
    console.log(5+2)
}
//funcion suma de tipo flecha
Sumar()
const Suma= () => console.log("Funcion Flecha", 5+2)
Suma()
//funcion multiplicar
function Multiplicar(N1, N2){
    return N1*N2
}
let resultado= Multiplicar(5, 7)
console.log("Funcion Multiplicar", resultado)
//funcion multiplicar tipo flecha
const Multi= (N1, N2) => N1*N2
console.log("FF Moltiplicar", Multi(5,8))
//funcion dividir
function Dividir(N1, N2=2){
    let resp= 0
    try{
        resp= N1/N2
    }catch (e){
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
Resp1= Dividir(8)
console.log("Funcion Dividir",Resp1)
Resp2= Dividir(7, 0)
console.log("Funcion Dividir",Resp2)
//funcion dividir tipo flecha
const Div= (N1, N2=2) => {
    let Resp= 0
    try{
        Resp= N1/N2
    }catch (e){
        console.log("Ha ocurrido un error: ", e.message)
    }
    return Resp
}
console.log("FF Dividir",Div(7))
console.log("FF Dividir",Div(4,0))
//fetch. sirve para consumir api(respuesta del servidor q entrega datos para ser consumidos)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(resp => resp.json())
    .then(datos => {
        console.log(datos.results)
        datos.results.forEach(Poke => console.log(Poke.name, Poke.url))
    }).catch(error => console.log("Error del API: ", error))
//async await: devuelve el objeto asincronico
const ObtenerDatos= async () => {
    try{
        const Res= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const Datos= await Res.json() 
        console.log("async await")
        Datos.results.forEach(poke => console.log(poke.name, poke.url))
    } catch (error) {
        console.log("Error del API con async: ", error)
    }
}
//DOM
let Contenido= document.getElementById('contenedor')
let Variable= document.getElementById('variable')
console.log(Contenido)
console.log(Variable)
Variable.innerHTML= 'Entero, Decimales, Strings, Boleanas, Fechas'
Variable.style.color= "red"
Variable.style.background= "black"
console.log(Variable)
let Concepto= document.querySelector('.concepto')
Concepto.innerHTML= "Area de memoria"
let Conceptos= document.querySelectorAll('.concepto')
let Cont= 1
Conceptos.forEach(Parrafo => {
    Parrafo.innerHTML= `Area de Memoria#${Cont}`
    console.log(Parrafo)
    Cont= Cont+1
})
console.log(Conceptos)
//eventos
let Boton= document.getElementById('boton1')
let Valor= document.getElementById('valor')
Boton.addEventListener('mouseover', () => {console.log("Has pasado el mouse")})
Boton.addEventListener('click', () => {let Nodo= document.createElement("p")
                                           Nodo.innerHTML= "nuevo elemento"
                                           Nodo.style.color= "red"
                                           Contenido.appendChild(Nodo)
                                           }
                      )
Valor.addEventListener('keypress', (e) => {console.log(e.target.value)})