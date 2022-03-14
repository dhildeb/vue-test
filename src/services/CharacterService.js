import $store from '@/store/index.js'
import Notify from "@/utils/Notify"
class CharacterService{
  takeTurn(){
    this.prepPhase()
    this.attackPhase()
    this.endPhase()
  }
  prepPhase(){
    this.resetActions()
  }
  attackPhase(){

  }
  endPhase(){
    $store.state.player.characters.forEach(c => {
      if(c.hp < (c.baseHp*-2)){
        $store.commit('destroyCharacter', c.id)
        Notify.toast(c.name+' was destroyed', 'error')
      }
    })
  }
  addCharacter(character){
    $store.state.player.characters.push(character)
  }
  resetActions(){
    $store.state.player.characters.forEach(c => {
      if(c.hp > 0){
        c.actions += c.baseActions
      }
    })
  }
  getAverageCharacterLvl(){
    let totalLvl = 0
    $store.state.player.characters.forEach(c => totalLvl += c.level)
    return Math.floor(totalLvl/$store.state.player.characters.length)
  }
}
export const characterService = new CharacterService()