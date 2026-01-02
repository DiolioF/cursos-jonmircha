import axios from 'axios';
import fs from 'fs';

// --- CONFIGURACIÓN ---
const DOMAIN = 'convertixapp.com';

// --- APIs PÚBLICAS DE CIBERINTELIGENCIA ---
const APIS = {
    otx: `https://otx.alienvault.com/otxapi/indicators/domain/${DOMAIN}/url_list?limit=500&page=1`,
    urlscan: `https://urlscan.io/api/v1/search/?q=domain:${DOMAIN}&size=100`
};

async function buscarAlienVault() {
    console.log(`📡 Consultando AlienVault OTX...`);
    try {
        const { data } = await axios.get(APIS.otx);
        const urls = data.url_list.map(obj => obj.url);
        return urls;
    } catch (e) {
        console.log(`❌ Falló AlienVault: ${e.message}`);
        return [];
    }
}

async function buscarUrlScan() {
    console.log(`📡 Consultando UrlScan.io...`);
    try {
        const { data } = await axios.get(APIS.urlscan);
        // UrlScan devuelve una estructura compleja, extraemos la URL del escaneo
        const urls = data.results.map(res => res.page.url);
        return urls;
    } catch (e) {
        // Nota: UrlScan a veces pide API Key si abusas, pero suele funcionar gratis
        console.log(`❌ Falló UrlScan: ${e.message}`);
        return [];
    }
}

async function main() {
    console.log(`🕵️ INICIANDO RECONOCIMIENTO PASIVO (OSINT)`);
    console.log(`------------------------------------------`);

    // Ejecutamos las búsquedas en paralelo
    const [urlsOTX, urlsScan] = await Promise.all([buscarAlienVault(), buscarUrlScan()]);
    
    // Unimos todo en una sola lista
    const todasLasUrls = [...urlsOTX, ...urlsScan];
    
    // FILTRADO: Solo queremos las que tengan "/link/"
    const linksDeBonos = new Set();
    
    todasLasUrls.forEach(url => {
        if (url.includes('/link/')) {
            // Limpiamos basura al final del link (query params, etc)
            // ej: .../link/zeus?fbclid=123 -> .../link/zeus
            const limpia = url.split('?')[0].split('#')[0];
            linksDeBonos.add(limpia);
        }
    });

    const listaFinal = [...linksDeBonos];

    console.log(`\n✅ RESULTADOS ENCONTRADOS: ${listaFinal.length}`);
    
    if (listaFinal.length > 0) {
        console.log("\n--- TOP 10 HALLAZGOS ---");
        console.log(listaFinal.slice(0, 10).join('\n'));
        if (listaFinal.length > 10) console.log("...");
        
        fs.writeFileSync('LINKS_EXTERNOS.txt', listaFinal.join('\n'));
        console.log(`\n💾 Lista completa guardada en 'LINKS_EXTERNOS.txt'`);
    } else {
        console.log("No se encontró nada en bases de datos externas.");
    }
}

main();