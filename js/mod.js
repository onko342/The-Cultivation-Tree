let modInfo = {
	name: "The Cultivation Tree",
	id: "heavenly dao",
	author: "onko342",
	pointsName: "Spirit Qi",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: new Decimal ("1.8e308"),  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.004",
	name: "Even More Qi is Here",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.004: Even More Qi is Here</h3><br>
		- 3 more upgrades, all dealing with getting more Spirit Qi. Gain is still relatively low though.<br>
	<h3>v0.003: More Qi is Here</h3><br>
		- Added another upgrade. I probably shouldn't be advancing versions this frequently.<br>
	<h3>v0.002: The Qi is Here</h3><br>
		- Added 1 upgrade.<br>
	<h3>v0.001: At least the name is correct!</h3><br>
		- Set the name of the game and the points.<br>
	<h3>v0.000: Literally Nothing</h3><br>
		- Started work on this project.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasUpgrade("d",11)) gain = new Decimal(1)
	if (hasUpgrade("d",12)) gain = gain.plus(2)
	if (hasUpgrade("d",13)) gain = gain.plus(3)
	if (hasUpgrade("d",14)) gain = gain.times(upgradeEffect("d",14))
	if (hasUpgrade("d",15)) gain = gain.times(upgradeEffect("d",15))
	if (hasUpgrade("d",16)) gain = gain.times(upgradeEffect("d",16))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}