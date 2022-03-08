import $store from '@/store/index.js'
import { monstersService } from "./MonstersService"
class GameService{
  determineTurn(){
      monstersService.takeTurn()
  }
  determineAttackOn(monster){
    let attacker = $store.state.selected
    if(attacker.actions > 0){
        attacker.actions--
        monster.hp -= $store.state.selected.strength
    }
  }
}

export const gameService = new GameService()