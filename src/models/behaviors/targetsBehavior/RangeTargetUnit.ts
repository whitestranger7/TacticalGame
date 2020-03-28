import ITargetBehavior from "../ITargetBehavior";
import Board from '../../Board/BoardInstance';

export default class RangeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        if(this.id < Board.getSize / 2) {
            let targets = [];
            for(let i = (Board.getSize / 2); i < Board.getSize; i++){
                targets.push(i);
            }
            return targets;
        }
        let targets = [];
        for(let i = 0; i < Board.getSize / 2; i++) {
            targets.push(i);
        }
        return targets;
    }

};