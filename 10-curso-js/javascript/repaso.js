//Ejercicio 2: Simular filter con reduce
//Crea una nueva lista que contenga solo los números pares de una lista de números original.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = (acumulador,numero) => {
    if(numero % 2 === 0)acumulador.push(numero)
    return acumulador
} 
let arrayPares = numeros.reduce(numerosPares,[])

//Ejercicio 3: Simular map para convertir a mayúsculas
//Convierte cada cadena en una lista de cadenas a mayúsculas.

const palabras = ['hola', 'mundo', 'javascript', 'reduce']

const palabrasMayusculas = (acumulador,string) => [...acumulador,string.toUpperCase()]
let palabrasUpper = palabras.reduce(palabrasMayusculas,[])

//Ejercicio 4: Filtrar y mapear en un solo paso
//Filtra los números mayores que 10 y luego elévalos al cuadrado.

const numeros2 = [5, 12, 8, 130, 44]

const filterMap = (ac,nm) => {
    if(nm > 10)ac.push(nm*nm)
    return ac
}
let mayor10Cuadrado = numeros2.reduce(filterMap,[])

//Ejercicio 5: Sumar valores de objetos en un arreglo
//Suma los valores de una propiedad específica en un arreglo de objetos.

const productos = [
  { nombre: 'Producto 1', precio: 100 },
  { nombre: 'Producto 2', precio: 200 },
  { nombre: 'Producto 3', precio: 300 }
]

let sumaPrecioObjeto = productos.reduce((ac,{precio})=>ac + precio,0) 

//Ejercicios con map, reduce y filter

//Ejercicio 1: Filtrar y mapear números
//Filtra los números mayores que 10 de un arreglo.
//Eleva al cuadrado los números resultantes.
//Suma todos los números elevados al cuadrado.


const numeros3 = [5, 12, 8, 130, 44]

const numeroProcesado = numeros3.filter(num => num > 10).map(num => num * num).reduce((ac,nm)=>ac+nm,0)

//Ejercicio 2: Filtrar nombres por longitud
//Filtra los nombres que tienen más de 5 caracteres.
//Convierte los nombres resultantes a mayúsculas.
//Concatenar todos los nombres en una sola cadena.
const nombres = ['Ana', 'José', 'Alejandra', 'Roberto','Laura']

let texto = nombres.filter(name => name.length > 4).map(name => name.toUpperCase()).reduce((ac,nombre)=>`${ac} ${nombre}` ,"").trim()

texto

//Ejercicio 3: Contar palabras en una cadena
//Divide una cadena en un arreglo de palabras.
//Filtra las palabras que tienen más de 3 letras.
//Cuenta el número total de palabras resultantes.
const frase = "El rápido zorro marrón salta sobre el perro perezoso";

let numPalabras = frase.split(" ").filter(word => word.length > 3).length
numPalabras

//Ejercicio 4: Agrupar objetos por propiedad
//Filtra los objetos con una propiedad específica.
//Extrae los valores de esa propiedad.
//Agrupa los valores en un objeto.

const personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'José', edad: 25 },
  { nombre: 'Alejandra', edad: 20 },
  { nombre: 'Roberto', edad: 30 },
  { nombre: 'Laura', edad: 25 }]

