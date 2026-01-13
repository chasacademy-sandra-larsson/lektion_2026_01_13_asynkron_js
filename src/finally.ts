
// finally körs ALLTID, oavsett om koden lyckas eller misslyckas
// Det är perfekt för att:
// - Stänga filer eller resurser
// - Dölja loading-indikatorer
// - Rensa upp temporära variabler
// - Logga att operationen är klar
//

async function fetchPokemonWithLoading(pokemonName: string) {
    let isLoading = true;
    
    try {
        console.log('🔄 Hämtar Pokemon...');
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch ${pokemonName}`);
        }
        
        const data = await response.json();
        console.log(`✅ ${data.name} hämtad! Höjd: ${data.height}`);
        return data;
        
    } catch (error) {
        console.error('❌ Fel:', error);
        throw error; // Kasta vidare felet om det behövs
    } finally {
        // Detta körs ALLTID, oavsett om try lyckades eller catch kördes
        isLoading = false;
        console.log('🏁 Loading klar (finally kördes)');
    }
}

fetchPokemonWithLoading('pikachu');