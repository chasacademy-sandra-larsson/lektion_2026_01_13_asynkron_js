// ============================================
// PEDAGOGISK FÖRKLARING: async/await
// ============================================
//
// Tänk dig att du beställer pizza:
// 1. Du ringer pizzerian (fetch) - "Jag vill ha en pizza"
// 2. De svarar "Okej, vi gör den" (Response-objekt)
// 3. Du måste vänta tills den är klar (response.json())
// 4. När den är klar får du pizzan (data-objektet)
// 5. Om något går fel får du ett felmeddelande (catch)
//
// ============================================
// STEG-FÖR-STEG FÖRKLARING:
// ============================================

// STEG 1: async function getPokemon()
//   - "async" betyder att funktionen kan använda "await"
//   - Det gör att vi kan vänta på Promises på ett synkront sätt
//   - Funktionen returnerar alltid en Promise (även om vi inte ser det)

async function getPokemon() {
    try {
        // STEG 2: const response = await fetch(...)
        //   - "await" betyder "vänta tills Promise är klar"
        //   - fetch() returnerar en Promise<Response>
        //   - await väntar tills fetch() är klar och ger oss Response-objektet
        //   - Det är som att vänta på att pizzerian ska svara
        //   - Response är ett objekt med HTTP-information (status, headers, etc.)
        //   - Men datan (JSON) finns INTE i Response-objektet ännu!
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

        // Varför detta? fetch() anser att anropet "lyckades" (nätverket fungerade)
        //Viktigt: fetch() kastar inte automatiskt fel för HTTP-felstatusar (404, 500, etc.).
        // true → Status 200-299 (lyckade svar)
        // false → 400, 404, 500, etc. (fel)
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon');
        }
        
        // STEG 3: const data = await response.json()
        //   - response.json() läser innehållet i Response (JSON-texten)
        //   - Parsar JSON-texten till ett JavaScript-objekt
        //   - Detta tar tid, så .json() returnerar också en Promise
        //   - await väntar tills .json() är klar
        //   - Det är som att öppna lådan och läsa innehållet
        //   - Resultatet blir ett JavaScript-objekt med Pokemon-data
        const data = await response.json();
        
        // STEG 4: console.log(data.name)
        //   - "data" är nu ett JavaScript-objekt med all Pokemon-information
        //   - Vi kan komma åt egenskaper som data.name, data.height, etc.
        //   - Här loggar vi bara namnet (t.ex. "pikachu")
        //   - Det är som att ta ut pizzan ur lådan och äta den
        console.log(data.name);
        
    } catch (error) {
        // STEG 5: catch (error) { ... }
        //   - Om NÅGOT går fel i något av stegen ovan, hoppar vi hit
        //   - Det kan vara: nätverksfel, fel URL, ogiltig JSON, etc.
        //   - "error" innehåller information om vad som gick fel
        //   - Vi loggar felet så att vi kan se vad som hände
        //   - Det är som att få reda på att pizzerian är stängd eller pizzan brändes
        console.error('Error:', error);
    }
}

// Kör funktionen
getPokemon();

// ============================================
// VISUELLT FLÖDE:
// ============================================
//
// async function getPokemon()
//   ↓
// await fetch() 
//   ↓ (väntar på HTTP-svar)
// Response-objekt (med JSON-text inuti)
//   ↓ await response.json()
//   ↓ (läser och parsar JSON)
// JavaScript-objekt { name: "pikachu", height: 4, ... }
//   ↓ console.log(data.name)
//   ↓ (loggar "pikachu")
// Klar!
//
// Om fel uppstår någonstans → catch-block körs
//
// ============================================
// JÄMFÖRELSE: .then() vs async/await
// ============================================
//
// Promise Chaining (.then()):
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data.name))
//   .catch(error => console.error(error));
//
// async/await (samma sak, men lättare att läsa):
// async function getPokemon() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.name);
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// Båda gör EXAKT samma sak, men async/await är:
// - Lättare att läsa (ser ut som synkron kod)
// - Lättare att debugga
// - Bättre felhantering med try/catch
// - Mindre "callback hell"
