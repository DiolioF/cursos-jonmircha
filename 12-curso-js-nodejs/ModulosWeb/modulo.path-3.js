import {basename, dirname, extname} from "path"

const ruta = "/ruta/principal/archivo.txt"

const nombreArchivo = basename(ruta)
const nombreDirectorio = dirname(ruta)
const extension = extname(ruta)

console.log("Nombre del Archivo: ",nombreArchivo)
console.log("Nombre del Directorio: ",nombreDirectorio)
console.log("Extension del archivo: ",extension)