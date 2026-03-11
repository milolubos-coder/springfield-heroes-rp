// --- DOMÁCA ZÁKLADŇA: TVOJ DOM (Sims Style) ---

const playerHome = {
    address: "742 Evergreen Terrace",
    level: 1,
    comfort: 10, // Ovplyvňuje regeneráciu HP
    furniture: [
        { id: 1, name: "Starý hnedý gauč", bonus: 5, price: 0, status: "Vlastnené" }
    ],
    catalog: [
        {
            id: 2,
            name: "Luxusné kreslo s masážou",
            price: 200,
            comfortBonus: 15,
            description: "Hrdina si v ňom lepšie oddýchne."
        },
        {
            id: 3,
            name: "Plazmová TV (ukradnutá od Flandersa)",
            price: 450,
            comfortBonus: 30,
            description: "Sledovanie Itchy & Scratchy zvyšuje morálku."
        }
    ]
};

function upgradeHome(player, furnitureId) {
    const item = playerHome.catalog.find(f => f.id === furnitureId);

    if (player.gold >= item.price) {
        player.gold -= item.price;
        playerHome.furniture.push({
            id: item.id,
            name: item.name,
            bonus: item.comfortBonus,
            status: "Vlastnené"
        });
        playerHome.comfort += item.comfortBonus;
        
        console.log(`🏠 Dom vylepšený! Pridal si: ${item.name}.`);
        console.log(`🛋️ Celkový komfort tvojho domova: ${playerHome.comfort}`);
    } else {
        console.log("❌ Nemáš dosť goldov na tento nábytok. Skús šetriť!");
    }
}

// Simulácia vylepšenia domova
// upgradeHome(hero, 2);
