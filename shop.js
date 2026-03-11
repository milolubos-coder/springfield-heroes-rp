// --- OBCHOD: KWIK-E-MART U APUHO ---

const kwikEMart = {
    owner: "Apu Nahasapeemapetilon",
    greeting: "Ďakujem, príďte zas!",
    stock: [
        {
            id: 1,
            name: "Vylepšená Dračia Helma",
            type: "Armor",
            price: 150,
            hpBonus: 50,
            description: "Ešte viac ostňov pre tvojho draka!"
        },
        {
            id: 2,
            name: "Mega Squishee s Uránom",
            type: "Consumable",
            price: 30,
            strengthBonus: 5,
            description: "Okamžitý nárast sily, ale možno ti narastie tretia ruka."
        }
    ]
};

function buyItem(player, itemId) {
    const item = kwikEMart.stock.find(i => i.id === itemId);

    if (!item) {
        console.log("Apu hovorí: Takýto tovar tu nemám, pane!");
        return;
    }

    if (player.gold >= item.price) {
        player.gold -= item.price;
        
        // Aplikácia bonusov
        if (item.hpBonus) player.hp += item.hpBonus;
        if (item.strengthBonus) player.strength += item.strengthBonus;

        console.log(`🛒 Kúpil si si: ${item.name}!`);
        console.log(`✨ Bonusy aplikované. Tvoje aktuálne HP: ${player.hp}, Sila: ${player.strength}`);
        console.log(kwikEMart.greeting);
    } else {
        console.log("❌ Apu hovorí: Na toto si príliš chudobný! Choď pracovať.");
    }
}

// Príklad nákupu
// buyItem(hero, 1);
