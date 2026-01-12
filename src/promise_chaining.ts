// ============================================
// PEDAGOGISK FÖRKLARING: Promise Chaining
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

// STEG 1: fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   - Skickar en HTTP-begäran till servern
//   - Returnerar en Promise<Response>
//   - Response är ett objekt med HTTP-information (status, headers, etc.)
//   - Men datan (JSON) finns INTE i Response-objektet ännu!
//   - Det är som att få en låda, men du vet inte vad som är inuti än

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    
    // STEG 2: .then(response => { ... })
    //   - När fetch() är klar, får vi Response-objektet
    //   - VIKTIGT: Kontrollera response.ok innan vi försöker läsa JSON
    //   - fetch() kastar INTE automatiskt fel för HTTP-felstatusar (404, 500, etc.)
    //   - response.ok är true för status 200-299, false för 400, 404, 500, etc.
    //   - Om response.ok är false, kastar vi ett fel som fångas av .catch()
    .then(response => {
        // Samma kontroll som i async/await: if (!response.ok)
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon');
        }
        // Om response.ok är true, fortsätter vi med att läsa JSON
        return response.json();
    })
    
    // STEG 3: .then(data => ...)
    //   - När .json() är klar, får vi det parsade objektet
    //   - Detta körs ENDAST om response.ok var true
    //   - response.json() läser innehållet i Response (JSON-texten)
    //   - Parsar JSON-texten till ett JavaScript-objekt
    //   - Det är som att öppna lådan och läsa innehållet
    //   - Resultatet blir ett JavaScript-objekt med Pokemon-data
    
    // STEG 4: .then(data => console.log(data.name))
    //   - När .json() är klar, får vi det parsade objektet
    //   - "data" är nu ett JavaScript-objekt med all Pokemon-information
    //   - Vi kan komma åt egenskaper som data.name, data.height, etc.
    //   - Här loggar vi bara namnet (t.ex. "pikachu")
    //   - Det är som att ta ut pizzan ur lådan och äta den
    .then(data => console.log(data.name))
    
    // STEG 5: .catch(error => console.error('Error:', error))
    //   - Om NÅGOT går fel i något av stegen ovan, hoppar vi hit
    //   - Det kan vara: nätverksfel, fel URL, ogiltig JSON, etc.
    //   - "error" innehåller information om vad som gick fel
    //   - Vi loggar felet så att vi kan se vad som hände
    //   - Det är som att få reda på att pizzerian är stängd eller pizzan brändes
    .catch(error => console.error('Error:', error));

// ============================================
// VISUELLT FLÖDE:
// ============================================
//
// fetch() 
//   ↓ (väntar på HTTP-svar)
// Response-objekt (med JSON-text inuti)
//   ↓ .then(response => response.json())
//   ↓ (läser och parsar JSON)
// JavaScript-objekt { name: "pikachu", height: 4, ... }
//   ↓ .then(data => console.log(data.name))
//   ↓ (loggar "pikachu")
// Klar!
//
// Om fel uppstår någonstans → .catch() körs
//
// ============================================
// VARFÖR KEDJNING?
// ============================================
// Varje .then() returnerar en ny Promise
// Det gör att vi kan "kedja" flera .then() efter varandra
// Det är som en kedja: länk 1 → länk 2 → länk 3
// Om en länk går sönder, hoppar vi till .catch()





