// --- JADRO HRY: HOSPODA U OČKA ---

const hero = {
    name: "Atómový Dračí Barbar",
    level: 1,
    hp: 150,
    gold: 100,
    strength: 15
};

const tavernQuests = [
    {
        id: 1,
        description: "Barney stratil kľúče v sude s pivom. Pomôž mu ich nájsť!",
        rewardGold: 50,
        difficulty: 5
    },
    {
        id: 2,
        description: "U Očka straší krysa z jadrovej elektrárne. Vyžeň ju!",
        rewardGold: 120,
        difficulty: 12
    }
];

function startQuest(questId) {
    const quest = tavernQuests.find(q => q.id === questId);
    console.log(`Začínaš quest: ${quest.description}`);
    
    // Jednoduchá mechanika súboja (Sila vs Obtiažnosť)
    if (hero.strength >= quest.difficulty) {
        hero.gold += quest.rewardGold;
        console.log("✅ Úspech! Získal si " + quest.rewardGold + " goldov.");
    } else {
        console.log("❌ Quest neúspešný, potrebuješ viac sily!");
    }
}

// Spustenie prvého questu
startQuest(1);
