export const TypeChart: {[k: string]: ModdedTypeData} = {
	bug: {
		damageTaken: {
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Fairy: 2,
			Fighting: 2,
			Fire: 0,
			Flying: 1,
			Ghost: 0,
			Grass: 3,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 1,
			Psychic: 2,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30, spd: 30},
		HPdvs: {atk: 13, def: 13},
	},
	dark: {
		damageTaken: {
			prankster: 0,
			Bug: 1,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Fairy: 1,
			Fighting: 1,
			Fire: 0,
			Flying: 0,
			Ghost: 2,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 2,
			Psychic: 3,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {},
	},
	dragon: {
		damageTaken: {
			Bug: 0,
			Dark: 0,
			Dragon: 1,
			Electric: 0,
			Fairy: 1,
			Fighting: 0,
			Fire: 2,
			Flying: 2,
			Ghost: 0,
			Grass: 2,
			Ground: 0,
			Ice: 0,
			Normal: 3,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 1,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {atk: 30},
		HPdvs: {def: 14},
	},
	electric: {
		damageTaken: {
			par: 0,
			Bug: 0,
			Dark: 0,
			Dragon: 1,
			Electric: 2,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 2,
			Ghost: 0,
			Grass: 0,
			Ground: 1,
			Ice: 3,
			Normal: 1,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 2,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {spa: 30},
		HPdvs: {atk: 14},
	},
	fairy: {
		damageTaken: {
			Bug: 0,
			Dark: 2,
			Dragon: 3,
			Electric: 0,
			Fairy: 0,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 2,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 1,
			Steel: 1,
			Stellar: 0,
			Water: 0,
		},
	},
	fighting: {
		damageTaken: {
			Bug: 2,
			Dark: 3,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 1,
			Ghost: 1,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 1,
			Rock: 2,
			Steel: 2,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30, spe: 30},
		HPdvs: {atk: 12, def: 12},
	},
	fire: {
		damageTaken: {
			brn: 0,
			Bug: 0,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 3,
			Flying: 0,
			Ghost: 0,
			Grass: 2,
			Ground: 1,
			Ice: 2,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Steel: 2,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {atk: 30, spa: 30, spe: 30},
		HPdvs: {atk: 14, def: 12},
	},
	flying: {
		damageTaken: {
			Bug: 2,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Fairy: 2,
			Fighting: 0,
			Fire: 0,
			Flying: 1,
			Ghost: 0,
			Grass: 2,
			Ground: 3,
			Ice: 1,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 13},
	},
	ghost: {
		damageTaken: {
			trapped: 0,
			Bug: 0,
			Dark: 1,
			Dragon: 2,
			Electric: 0,
			Fairy: 1,
			Fighting: 3,
			Fire: 0,
			Flying: 0,
			Ghost: 1,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 2,
			Rock: 2,
			Steel: 0,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {def: 30, spd: 30},
		HPdvs: {atk: 13, def: 14},
	},
	grass: {
		damageTaken: {
			powder: 0,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Fairy: 0,
			Fighting: 0,
			Fire: 1,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 2,
			Ice: 1,
			Normal: 1,
			Poison: 0,
			Psychic: 0,
			Rock: 2,
			Steel: 0,
			Stellar: 0,
			Water: 3,
		},
		HPivs: {atk: 30, spa: 30},
		HPdvs: {atk: 14, def: 14},
	},
	ground: {
		damageTaken: {
			sandstorm: 0,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 3,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 1,
			Ground: 2,
			Ice: 1,
			Normal: 0,
			Poison: 2,
			Psychic: 2,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 1,
		},
		HPivs: {spa: 30, spd: 30},
		HPdvs: {atk: 12},
	},
	ice: {
		damageTaken: {
			hail: 0,
			frz: 0,
			Bug: 1,
			Dark: 2,
			Dragon: 2,
			Electric: 0,
			Fairy: 3,
			Fighting: 0,
			Fire: 1,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Steel: 0,
			Stellar: 0,
			Water: 2,
		},
		HPivs: {atk: 30, def: 30},
		HPdvs: {def: 13},
	},
	normal: {
		damageTaken: {
			Bug: 2,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 1,
			Fire: 1,
			Flying: 0,
			Ghost: 3,
			Grass: 0,
			Ground: 2,
			Ice: 0,
			Normal: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 2,
		},
	},
	poison: {
		damageTaken: {
			psn: 0,
			tox: 0,
			Bug: 3,
			Dark: 0,
			Dragon: 2,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 2,
			Grass: 0,
			Ground: 1,
			Ice: 0,
			Normal: 0,
			Poison: 2,
			Psychic: 1,
			Rock: 0,
			Steel: 1,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 14},
	},
	psychic: {
		damageTaken: {
			Bug: 1,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Fairy: 2,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 1,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 2,
			Poison: 2,
			Psychic: 0,
			Rock: 0,
			Steel: 3,
			Stellar: 0,
			Water: 0,
		},
		HPivs: {atk: 30, spe: 30},
		HPdvs: {def: 12},
	},
	rock: {
		damageTaken: {
			sandstorm: 0,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Fairy: 0,
			Fighting: 1,
			Fire: 2,
			Flying: 3,
			Ghost: 0,
			Grass: 1,
			Ground: 0,
			Ice: 0,
			Normal: 2,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 1,
		},
		HPivs: {def: 30, spd: 30, spe: 30},
		HPdvs: {atk: 13, def: 12},
	},
	steel: {
		damageTaken: {
			psn: 0,
			tox: 0,
			sandstorm: 0,
			Bug: 0,
			Dark: 0,
			Dragon: 1,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 2,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 2,
			Normal: 2,
			Poison: 3,
			Psychic: 1,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 1,
		},
		HPivs: {spd: 30},
		HPdvs: {atk: 13},
	},
	stellar: {
		damageTaken: {
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Stellar: 0,
			Water: 0,
		},
	},
	water: {
		damageTaken: {
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Fairy: 0,
			Fighting: 0,
			Fire: 2,
			Flying: 0,
			Ghost: 0,
			Grass: 1,
			Ground: 0,
			Ice: 2,
			Normal: 1,
			Poison: 0,
			Psychic: 0,
			Rock: 3,
			Steel: 0,
			Stellar: 0,
			Water: 2,
		},
		HPivs: {atk: 30, def: 30, spa: 30},
		HPdvs: {atk: 14, def: 13},
	},
};
