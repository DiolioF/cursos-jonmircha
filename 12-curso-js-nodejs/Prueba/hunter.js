import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

// --- CONFIGURACIÓN DE SEGURIDAD ---
const BASE_URL = 'https://www.convertixapp.com/link/';
const DELAY_MS = 1500; // 1.5 segundos (Más lento = Más seguro)

// --- TU DICCIONARIO ---
const bases = [
    // Ponemos 'zeus' primero para verificar que funciona rápido
    'zeus', 
    'mati', 'santi', 'fran', 'seba', 'agus', 'nico', 'joaco', 
    'aviator', 'mines', 'spaceman', 'plinko', 'olympus', 
    'bono', 'bonus', 'ganar', 'regalo'
];

const sufijos = ['', '100', '2024', 'vip'];

const SUCCESS_KEYWORDS = ['bono', '50%', 'sumate', 'casino', 'duplica'];

// --- GENERADOR ---
function generarLista() {
    let lista = [];
    bases.forEach(b => sufijos.forEach(s => lista.push(`${b}${s}`)));
    return [...new Set(lista)];
}

async function checkRoute(slug) {
    const targetUrl = `${BASE_URL}${slug}`;
    
    // Imprimimos qué estamos probando (en gris o normal)
    process.stdout.write(`Testing: /${slug.padEnd(15)} `);

    try {
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Cache-Control': 'no-cache'
            },
            validateStatus: () => true,
            timeout: 8000
        });

        // Si el servidor nos bloquea (403/429), avisamos
        if (response.status === 403 || response.status === 429) {
            console.log(`❌ BLOQUEADO (Espera unos minutos)`);
            return;
        }

        if (response.status === 404) {
            console.log(`(404)`); // No existe
            return;
        }

        const html = response.data;
        const bodyLower = html.toLowerCase();
        
        // --- LÓGICA DE DETECCIÓN ---
        // Buscamos las palabras CLAVE en todo el HTML crudo
        const foundKeyword = SUCCESS_KEYWORDS.find(kw => bodyLower.includes(kw));

        if (foundKeyword) {
            // ¡ENCONTRADO!
            console.log(`\n💰💰 ¡BINGO! -> ${targetUrl}`);
            console.log(`   Palabra clave detectada: "${foundKeyword}"`);
            
            // Guardamos
            fs.appendFileSync('GANADORES.txt', `${targetUrl}\n`);
        } else {
            console.log(`(Sin bonos)`);
        }

    } catch (err) {
        console.log(`Err: ${err.message}`);
    }
}

async function main() {
    const objetivos = generarLista();
    console.log(`\n🚀 INICIANDO MODO SIGILOSO`);
    console.log(`🎯 ${objetivos.length} rutas a probar. Paciencia...`);
    console.log(`--------------------------------------------------`);

    for (const slug of objetivos) {
        await checkRoute(slug);
        // Pausa obligatoria
        await new Promise(r => setTimeout(r, DELAY_MS));
    }
}

main();