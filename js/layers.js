addLayer("d", {
    name: "density", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#9c3c13",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "density", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Condense Qi to earn Density", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Qi Condensation",
            description: "Start your cultivation journey. Generate 1 Qi per second.",
            cost: new Decimal(1),
            unlocked() {return player[this.layer].unlocked},
            tooltip: "Qi Condensation Stage 1",
        },
        12: {
            title: "Faster Flow",
            description: "Try to absorb Qi faster. Double it, no, actually triple Qi gain.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade("d",11)},
            tooltip: "Qi Condensation Stage 2",
        }
    }
})
