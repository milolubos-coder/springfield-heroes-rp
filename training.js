// --- JADRO TRÉNINGU: JADROVÁ ELEKTRÁREŇ ---

const trainingCenter = {
    location: "Sektor 7-G",
    boss: "Homer",
    trainStrengthCost: 10, // Koľko goldov stojí tréning
    strengthGain: 2        // O koľko sa ti zvýši sila
};

function trainHero(player) {
    console.log("--- Vstupuješ do elektrárne na tréning ---");

    if (player.gold >= trainingCenter.trainStrengthCost) {
        player.gold -= trainingCenter.trainStrengthCost;
        player.strength += trainingCenter.strengthGain;
        
        console.log(`💪 Tréning úspešný! Tvoja nová Sila je: ${player.strength}`);
        console.log(`💰 Zostatok v peňaženke: ${player.gold} goldov.`);
    } else {
        console.log("❌ Nemáš dosť goldov na tréning! Choď na quest k Očkovi.");
    }
}

// Simulácia tréningu (voláme funkciu na nášho hrdinu z game.js)
trainHero(hero); 
