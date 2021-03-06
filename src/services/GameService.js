import { Item } from "@/models/Item"
import { MonsterFactory } from "@/models/MonsterFactory"
import $store from '@/store/index.js'
import { characterLvlUpStatHelper } from "@/utils/characterLvlUpStatHelper"
import { buffService } from "./BuffService"
import { characterService } from "./CharacterService"
import { itemsService } from "./ItemsService"
import { monstersService } from "./MonstersService"
import { questService } from "./QuestService"
import { spellsService } from "./SpellsService"
class GameService{
  determineTurn(){
    monstersService.takeTurn()
  }

  spawnMonsters(){
    $store.state.combatMonsters = []
    let quantity = Math.ceil(Math.random()*3)
    for(let i=0; i<quantity; i++){
      let monstersList = $store.state.monsters[$store.state.location]
      let index = Math.floor(Math.random()*monstersList.length)
      $store.state.combatMonsters.push(new MonsterFactory(monstersList[index]))
    }
    itemsService.randomItemDrop()
  }
  victory(){
    characterService.resetActions()
    characterService.resetExtraHp()
    this.removeBuffs()
    this.addKillCounts()
    this.handleExpGain()
    this.loot()
    questService.checkQuest()
  }
  handleExpGain(){
    let totalExp = $store.state.combatMonsters.map(m => m.exp).reduce((previous, current) => previous + current)
    let charNum = $store.state.player.characters.filter(c => c.hp > 0 && c.inBattle).length
    $store.state.player.characters.forEach(c => {
      if(c.hp > 0 && c.inBattle){
        c.exp += totalExp/charNum
        if(c.exp >= $store.state.levelUpChart[c.level]){
          this.levelUp(c)
        }
      }
      })
  }

  loot(){
    $store.state.combatMonsters.forEach(c => {
      $store.state.player.gold += c.loot.gold
      c.loot.items.forEach(li => {
        let item = $store.state.items.filter(i => i.name == li)
        $store.state.player.items.push(new Item(item[0]))
      })
      if(c.equipment.length > 0){
        c.equipment.forEach(ei => {
          let item = $store.state.items.filter(i => i.name == ei)
          $store.state.player.items.push(new Item(item[0]))
        })
      }
    })
  }
  removeBuffs(){
    $store.state.player.characters.forEach(c => {
      c.buffs.forEach(b => buffService.removeBuff(c, b))
      c.debuffs.forEach(b => buffService.removeDebuff(c, b))
      c.buffs = []
      c.debuffs = []
    })
  }
  addKillCounts(){
    $store.state.combatMonsters.forEach(m => {
      if(!$store.state.player.kills[m.name]){
        $store.state.player.kills[m.name] = 1
      }else{
        $store.state.player.kills[m.name]++
      }
    })
  }

  levelUp(character){
    character.level++
    let lvlUpBoosts = characterLvlUpStatHelper(character.classType, character.race, character.level)
    lvlUpBoosts.classBoost.forEach(stat => character[stat]++)
    lvlUpBoosts.raceBoost.forEach(stat => character[stat]++)

    if(character.magic > 0){
      let spell = spellsService.findRandomLearnableSpell(character)
      spellsService.learnSpell(spell, character)
    }

    character.hp += character.level*(character.level > 1 ? character.level : 3)
    character.baseHp += character.level*(character.level > 1 ? character.level : 3)
    // TODO add custom stat bonus
  }
}

export const gameService = new GameService()