import ITargetBehavior from "../ITargetBehavior";
import Board from '../../Board/BoardInstance';

export default class HealTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        if(this.id < Board.getSize / 2) {
            let targets = [];
            for(let i = 0; i < Board.getSize / 2; i++) {
                const currentTarget = Board.getUnits[i];
                if(currentTarget.getMaxHp !== currentTarget.getHp){
                    targets.push(i);
                }
            }
            return targets;
        }
        let targets = [];
        for(let i = (Board.getSize / 2); i < Board.getSize; i++){
            const currentTarget = Board.getUnits[i];
            if(currentTarget.getMaxHp !== currentTarget.getHp){
                targets.push(i);
            }
            targets.push(i);
        }
        return targets;
    }

};