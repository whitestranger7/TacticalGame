import ITargetBehavior from "./ITargetBehavior";
import { checkTargetAlive } from './selectFunctions';
import Board from '../../Board/BoardInstance';

export default class RangeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        let targets: number[] = [];
        if(this.id < Board.getSize / 2) {
            for(let i = (Board.getSize / 2); i < Board.getSize; i++){
                checkTargetAlive(targets, [i]);
            }
            return targets;
        }
        for(let i = 0; i < Board.getSize / 2; i++) {
            checkTargetAlive(targets, [i]);
        }
        return targets;
    }

};