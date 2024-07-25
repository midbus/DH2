export const Items: {[itemid: string]: ModdedItemData} = {
	dededesmask: {
		name: "Dedede's Mask",
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 2) || pokemon.baseSpecies.num === 2) {
				return false;
			}
			return true;
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		forcedForme: "Masked Dedede",
		itemUser: ["Masked Dedede"],
		num: -1,
		gen: 9,
		desc: "If held by King Dedede, this item changes its forme to Masked Dedede. Holder is immune to flinching.",
	},
	dracocentauriumz: {
		name: "Dracocentaurium Z",
		desc: "If held by a Draco Centauros with Draco Burning, it can use Great Fire.",
		spritenum: 632,
		onTakeItem: false,
		zMove: "Great Fire",
		zMoveFrom: "Draco Burning",
		itemUser: ["Draco Centauros"],
		num: -2,
		gen: 9,
	},
	wriggliumz: {
		name: "Wrigglium Z",
		desc: "If held by a Wriggle Nightbug with Centipede Assault, it can use Luciola Cruciata.",
		spritenum: 642,
		onTakeItem: false,
		zMove: "Luciola Cruciata",
		zMoveFrom: "Centipede Assault",
		itemUser: ["Wriggle Nightbug-Altered"],
		num: -3,
		gen: 9,
	},
	maannaniumz: {
		name: "Maannanium Z",
		desc: "If held by an Ishtar with Meteor Beam, it can use Mountain Range-Shaking Firewood of Venus.",
		spritenum: 643,
		onTakeItem: false,
		zMove: "Mountain Range-Shaking Firewood of Venus",
		zMoveFrom: "Meteor Beam",
		itemUser: ["Ishtar"],
		num: -4,
		gen: 9,
	},
	hecatiumz: {
		name: "Hecatium Z",
		desc: "If held by an Hecatia-Tropical with Life Soup, it can use Water Planet.",
		spritenum: 633,
		onTakeItem: false,
		zMove: "Water Planet",
		zMoveFrom: "Life Soup",
		itemUser: ["Hecatia-Tropical"],
		num: -4,
		gen: 9,
	},
	kaguyiumz: {
		name: "Kaguyium Z",
		desc: "If held by a Kaguya Houraisan with Giga Drain, it can use Tree-Ocean of Hourai.",
		spritenum: 635,
		onTakeItem: false,
		zMove: "Tree-Ocean of Hourai",
		zMoveFrom: "Giga Drain",
		itemUser: ["Kaguya Houraisan"],
		num: -5,
		gen: 9,
	},
	threesacredtreasures: {
		name: "Three Sacred Treasures",
		desc: "If held by Pit, this item allows him to Mega Evolve in battle.",
		megaStone: "Pit-Mega",
		megaEvolves: "Pit",
		itemUser: ["Pit"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -6,
		gen: 9,
	}
	// unresolved issues with Negative Zone, not implementing
};
