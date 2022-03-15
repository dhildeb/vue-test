import { createStore } from 'vuex'
import Notify from "@/utils/Notify"
const store = createStore({
  state: {
      monsters: {
        1: [{name: 'goblin', actions: 1, baseActions: 1, strength: 1, hp: 5, baseHp: 5, id: 1, loot: {gold: 5, items: ''}, maxPrize: '', exp: 50, img: 'https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/monsters%2Fgoblin.png?alt=media&token=92f9a971-2733-42a9-b616-563ffcbe86dc'}], 
        20: [{name: 'dragon',actions: 3, baseActions: 3, strength: 10, hp: 500, id: 100, goldPrize: 500, maxPrize: 'dragon', exp: 2000}]
      },
      cards: [{name: 'Assassin', cost: 50, power: 2, ability: 'dodge', abilityBoost: .1, type: 'human'}, {name: 'Barbarian', cost: 60, power: 3, ability: 'crit', abilityBoost: .1, type: 'human'}],
      characters: {
        classes: ['rogue', 'ranger', 'barbarian', 'wizard', 'cleric', 'fighter', 'monk', 'paladin', 'warlock'],
        races: ['dragonborn', 'human', 'elf', 'dwarf', 'halfling', 'unknown' ]
      },
      combatMonsters: [],
      player: {
        characters: [],
        hp: 10,
        abilities: {dodge: 0, crit: 0},
        gold: 0,
        items: []
      },
      selected: '',
  },
  getters: {

  },
  mutations: {
    selectCharacter(state, char){
      state.selected = char
    },
    monsterAttacked(state, monster){
      if(state.selected.actions > 0){
        state.selected.actions -= 1
        monster.hp -= state.selected.power
      }else{
        Notify.toast(state.selected.name+' is out of actions', 'warning')
      }
    },
    bringOutYourDead(state){
      state.combatMonsters = []
    },
    destroyCharacter(state, characterId){
      state.player.characters = state.player.characters.filter(c => c.id != characterId)
    },
    unselect(state){
      state.selected = ''
    },
    reducePlayerGold(state, cost){
      state.player.gold -= cost
    }
  },
  actions: {
    unselect(context){
      if(this.state.selected.actions < 1){
        context.commit('unselect')
      }
    }
  },
  modules: {
  }
})

export default store
