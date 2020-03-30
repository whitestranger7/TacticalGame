import ITargetBehavior from "./ITargetBehavior";
import { checkTargetAlive } from './selectFunctions';
import Board from '../../Board/BoardInstance';

export default class ParalyzeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        let targets: number[] = [];
        if(this.id < Board.getSize / 2) {
            for(let i = (Board.getSize / 2); i < Board.getSize; i++) {
                const currentTarget = Board.getUnits[i];
                if(!currentTarget.getParalyzedStatus){
                    checkTargetAlive(targets, [i]);
                }
            }
            return targets;
        }
        for(let i = 0; i < Board.getSize / 2; i++){
            const currentTarget = Board.getUnits[i];
            if(!currentTarget.getParalyzedStatus){
                checkTargetAlive(targets, [i]);
            }
        }
        return targets;
    }

};