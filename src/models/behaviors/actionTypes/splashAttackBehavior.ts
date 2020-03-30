import IActionBehavior from './IActionBehavior';
import Board from '../../Board/BoardInstance';

export default class SplashAttackBehavior implements IActionBehavior {
    
    constructor(public damage: number) {
        this.damage = damage;
    }

    action(unitIndex: number){
        if(unitIndex < Board.getSize / 2){
            for(let i = 0; i < Board.getSize / 2; i++){
                Board.getUnits[i].takeDamage(this.damage);
            }
        }else {
            for(let i = Board.getSize / 2; i < Board.getSize; i++){
                Board.getUnits[i].takeDamage(this.damage);
            }
        }
        console.log(`${unitIndex} team splash`)
    }
};