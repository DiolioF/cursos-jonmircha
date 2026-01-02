import axios from 'axios';
import * as cheerio from 'cheerio';

const TARGET = 'https://www.convertixapp.com/link/zeus';

async function debugLink() {
    console.log(`🕵️ Analizando: ${TARGET}`);
    console.log(`⏳ Conectando...`);

    try {
        const response = await axios.get(TARGET, {
            headers: {
                // Headers idénticos a un Chrome real para engañar al firewall
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
                'Referer': 'https://www.google.com/',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            },
            validateStatus: () => true // Muestra CUALQUIER código (200, 403, 404, 500)
        });

        console.log(`\n📡 ESTADO HTTP: ${response.status} ${response.statusText}`);
        
        if (response.status === 403 || response.status === 429) {
            console.log("❌ BLOQUEADO: El servidor sabe que eres un script (Firewall/Cloudflare).");
            return;
        }

        const html = response.data;
        const $ = cheerio.load(html);
        const title = $('title').text();
        const h1 = $('h1').text();
        
        console.log(`📄 TÍTULO LEÍDO: "${title}"`);
        console.log(`📄 H1 LEÍDO: "${h1}"`);
        console.log(`📏 TAMAÑO HTML: ${html.length} caracteres`);

        // Verificamos si las palabras clave aparecen
        const keywords = ['bono', 'casino', 'sumate', 'zeus'];
        const bodyLower = $('body').text().toLowerCase();
        
        console.log("\n🔍 Buscando palabras clave:");
        keywords.forEach(word => {
            const found = bodyLower.includes(word) || title.toLowerCase().includes(word);
            console.log(`   - "${word}": ${found ? '✅ SÍ' : '❌ NO'}`);
        });

    } catch (error) {
        console.log(`🔥 ERROR FATAL: ${error.message}`);
    }
}

debugLink();