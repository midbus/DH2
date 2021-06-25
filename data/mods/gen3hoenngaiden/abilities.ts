export const Abilities: {[k: string]: ModdedAbilityData} = {
	cutecharm: {
		inherit: true,
		desc: "There is a 1/3 chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "1/3 chance of infatuating Pokemon of the opposite gender if they make contact.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.addVolatile('attract', target);
				}
			}
		},
	},
	effectspore: {
		inherit: true,
		desc: "10% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "10% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact'] && !source.status) {
				const r = this.random(300);
				if (r < 10) {
					source.setStatus('slp', target);
				} else if (r < 20) {
					source.setStatus('par', target);
				} else if (r < 30) {
					source.setStatus('psn', target);
				}
			}
		},
	},
	flamebody: {
		inherit: true,
		desc: "1/3 chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be burned.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('brn', target);
				}
			}
		},
	},
	flashfire: {
		inherit: true,
		desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability. If this Pokemon has a major status condition, is a Fire type, or has a substitute, Will-O-Wisp will not activate this Ability.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (move.id === 'willowisp' && (target.hasType('Fire') || target.status || target.volatiles['substitute'])) {
					return;
				}
				if (target.status === 'frz') {
					return;
				}
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
	},
	intimidate: {
		inherit: true,
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (target && this.isAdjacent(target, pokemon) && !target.volatiles['substitute']) {
					activated = true;
					break;
				}
			}

			if (!activated) {
				this.hint("In Gen 3, Intimidate does not activate if every target has a Substitute.", false, pokemon.side);
				return;
			}
			this.add('-ability', pokemon, 'Intimidate', 'boost');

			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;

				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},
	},
	lightningrod: {
		desc: "If this Pokemon is not the target of a single-target Electric-type move used by an opposing Pokemon, this Pokemon redirects that move to itself. This effect considers Hidden Power a Normal-type move.",
		shortDesc: "This Pokemon draws single-target Electric moves used by opponents to itself.",
		onFoeRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric') return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				return this.effectData.target;
			}
		},
		name: "Lightning Rod",
		rating: 3.5,
		num: 32,
	},
	minus: {
		inherit: true,
		desc: "If an active Pokemon has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active Pokemon has the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		onModifySpA(spa, pokemon) {
			for (const active of this.getAllActive()) {
				if (!active.fainted && active.hasAbility('plus')) {
					return this.chainModify(1.5);
				}
			}
		},
	},
	plus: {
		inherit: true,
		desc: "If an active Pokemon has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active Pokemon has the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		onModifySpA(spa, pokemon) {
			for (const active of this.getAllActive()) {
				if (!active.fainted && active.hasAbility('minus')) {
					return this.chainModify(1.5);
				}
			}
		},
	},
	poisonpoint: {
		inherit: true,
		desc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('psn', target);
				}
			}
		},
	},
	pressure: {
		inherit: true,
		onStart(pokemon) {
			this.addSplit(pokemon.side.id, ['-ability', pokemon, 'Pressure', '[silent]']);
		},
	},
	roughskin: {
		inherit: true,
		desc: "Pokemon making contact with this Pokemon lose 1/16 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/16 of their max HP.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				this.damage(source.baseMaxhp / 16, source, target);
			}
		},
	},
	shadowtag: {
		inherit: true,
		desc: "Prevents opposing Pokemon from choosing to switch out.",
		shortDesc: "Prevents opposing Pokemon from choosing to switch out.",
		onFoeTrapPokemon(pokemon) {
			pokemon.trapped = true;
		},
	},
	static: {
		inherit: true,
		desc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
		shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed.",
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('par', target);
				}
			}
		},
	},
	trace: {
		inherit: true,
		onUpdate(pokemon) {
			if (!pokemon.isStarted) return;
			const target = pokemon.side.foe.randomActive();
			if (!target || target.fainted) return;
			const ability = target.getAbility();
			const bannedAbilities = ['forecast', 'multitype', 'trace'];
			if (bannedAbilities.includes(target.ability)) {
				return;
			}
			if (pokemon.setAbility(ability)) {
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			}
		},
	},
	truant: {
		inherit: true,
		onStart() {},
		onSwitchIn(pokemon) {
			pokemon.truantTurn = this.turn !== 0;
		},
		onBeforeMove(pokemon) {
			if (pokemon.truantTurn) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			pokemon.truantTurn = !pokemon.truantTurn;
		},
	},
	voltabsorb: {
		inherit: true,
		desc: "This Pokemon is immune to damaging Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by one.",
		shortDesc: "This Pokemon heals 1/4 its max HP when hit by a damaging Electric move; immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric' && move.id !== 'thunderwave') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
	},
	wonderguard: {
		inherit: true,
		shortDesc: "This Pokemon is only damaged by supereffective moves and indirect damage.",
	},
	snowwarning: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('hail');
		},
		isNonstandard: null,
		gen: 3,
	},
	rkssystem: {
	shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",
		// RKS System's type-changing itself is implemented in statuses.js
		id: "rkssystem",
		isNonstandard: null,
		gen: 3,
		name: "RKS System",
		rating: 4,
		num: 225,
	},
	sandveil: {
		desc: "If Sandstorm is active, this Pokemon's defence is multiplied by 1.1. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's defence is 1.1x; immunity to Sandstorm.",
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyDef(def, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.1);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandveil",
		name: "Sand Veil",
		rating: 3,
		num: 146,
	},
	icebody: {
		onWeather(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		isNonstandard: null,
		gen: 3,
		name: "Ice Body",
		rating: 1,
		num: 115,
	},
	overcoat: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['powder'] && target !== source && this.dex.getImmunity('powder', target)) {
				this.add('-immune', target, '[from] ability: Overcoat');
				return null;
			}
		},
		isNonstandard: null,
		gen: 3,
		name: "Overcoat",
		rating: 2,
		num: 142,
	},
	magicguard: {
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		isNonstandard: null,
		gen: 3,
		name: "Magic Guard",
		rating: 4,
		num: 98,
	},
	galvanize: {
		onModifyType(move, pokemon) {
			if (move.type === 'Normal' && (move.category !== 'Status')) {
				move.type = 'Electric';
			}
		},
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && (move.category !== 'Status')) {
				move.category = 'Special';
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.galvanizeBoosted) return this.chainModify(1.2);
		},
		inherit: true,
		isNonstandard: null,
		gen: 3,
		name: "Galvanize",
		rating: 4,
		num: 206,
	},
	desolateland: {
		onStart(source) {
			this.field.setWeather('desolateland');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('desolateland')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		isNonstandard: null,
		gen: 3,
		name: "Desolate Land",
		rating: 4.5,
		num: 190,
	},
	forecast: {
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
				if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.species.id !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		},
		name: "Forecast",
		rating: 2,
		num: 59,
	},
	chlorophyll: {
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Chlorophyll",
		rating: 3,
		num: 34,
	},
};
