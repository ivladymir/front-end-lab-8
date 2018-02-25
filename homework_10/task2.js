/**
 * @typedef {Object} CombatHistory
 * @property {wins} number - Number of victories
 * @property {loses} number - Number of defeats
 */

/**
 * @typedef {Object} Stats
 * @property {string} name - The name of fighter
 * @property {number} attack - The amount of attack of fighter
 * @property {number} hp - The total number of health point of fighter
 */

/**
 * @typedef {Object} Fighter
 * @property {function} getName - Return name of the fighter
 * @property {function} fight - Return true if fighter make dmg to enemy, otherwise false
 * @property {function} block - Return true if enemy can block incoming damage, otherwise false (randomly)
 * @property {function} getStats - Retrurn {Stats} of fighter
 * @property {number} getCombatHistory - Return {CombatHistory} of previous fights
 */

/**
 * Pretty print fighter's info
 * @param {Fighter} fighter - The fighter
 * DO NOT MODIFY
 */
function showResult(fighter) {
  console.log('Fighter', fighter.getName());
  console.log('- Combat stats:', fighter.getCombatHistory());
  console.log('- Properties:', fighter.getStats());
}

function fighter(fighterObj){
	let history={ wins: 0, loses: 0 };
	return{
		getName: function(){
			return fighterObj.name;
		},
		block: function(){
			return Math.random() < 0.5;
		},
		getStats: function(){
			return fighterObj;
		},
		getCombatHistory: function(){
			return history;
		},
		fight: function(enemy){
			if(enemy.block()) {
				return false;
			} else {
				let damage = enemy.getStats().hp-fighterObj.attack;
				if(damage>0){
					history.loses++;
					enemy.getCombatHistory().wins++;
					this.getStats().hp=-fighterObj.attack;
				}else{
					history.wins++;
					enemy.getCombatHistory().loses++;
					enemy.getStats().hp=damage;
					return true;
				}
			}
		}

	}
}

var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2); 
fighter1.fight(fighter3);

showResult(fighter1);
showResult(fighter2); 
showResult(fighter3);
