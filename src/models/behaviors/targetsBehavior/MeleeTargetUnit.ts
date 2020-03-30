import ITargetBehavior from "./ITargetBehavior";
import { checkTargetAlive } from './selectFunctions';
import Board from "../../Board/BoardInstance";

export default class MeleeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        //Constants
        const cols = Board.getCols;
        const rows = Board.getRows;
        const start = cols * (rows / 2) - (cols);
        const end = start + (cols * 2) - 1;

        //only in 2 centered rows units can damage
        if(this.id >= start && this.id <= end){
            //1st team first line
            if(this.id <= (start + cols - 1)){
                let targets: number[] = [];
                if(this.id === start) {
                    checkTargetAlive(targets, [this.id+cols, this.id+cols+1]);
                    if(targets.length === 0) {
                        checkTargetAlive(targets, [this.id+cols+2]);
                    }
                    if(targets.length === 0) {
                        let newTargets: number[] = [];
                        for(let i = this.id+(cols*2); i <= this.id+(cols*3)-1; i++){
                            newTargets.push(i);
                        }
                        checkTargetAlive(targets, newTargets);
                    }
                    return targets;
                }
                if(this.id === (start + cols - 1)) {
                    checkTargetAlive(targets, [this.id+cols-1, this.id+cols]);
                    if(targets.length === 0) {
                        checkTargetAlive(targets, [this.id+cols-2]);
                    }
                    if(targets.length === 0) {
                        let newTargets: number[] = [];
                        for(let i = this.id+cols+1; i <= this.id+(cols*2); i++){
                            newTargets.push(i);
                        }
                        checkTargetAlive(targets, newTargets);
                    }
                    return targets;
                }
                checkTargetAlive(targets, [this.id+cols-1, this.id+cols, this.id+cols+1])
                if(targets.length === 0) {
                    checkTargetAlive(targets, [this.id+(cols*2)-1, this.id+(cols*2), this.id+(cols*2)+1])
                }
                return targets;
            //2nd steam first line
            }else {
                let targets: number[] = [];
                if(this.id === (end-cols+1)) {
                    checkTargetAlive(targets, [this.id-cols, this.id-cols+1]);
                    if(targets.length === 0) {
                        checkTargetAlive(targets, [this.id-cols+2]);
                    }
                    if(targets.length === 0) {
                        let newTargets: number[] = [];
                        for(let i = this.id-(cols*2); i <= this.id-cols-1; i++){
                            newTargets.push(i);
                        }
                        checkTargetAlive(targets, newTargets);
                    }
                    return targets;
                }
                if(this.id === end){
                    checkTargetAlive(targets, [this.id-cols-1, this.id-cols]);
                    if(targets.length === 0) {
                        checkTargetAlive(targets, [this.id-cols-2])
                    }
                    if(targets.length === 0) {
                        let newTargets: number[] = [];
                        for(let i = this.id-(cols*3)+1; i <= this.id-(cols*2); i++){
                            newTargets.push(i);
                        }
                        checkTargetAlive(targets, newTargets);
                    }
                    return targets;
                }
                checkTargetAlive(targets, [this.id-cols-1, this.id-cols, this.id-cols+1]);
                if(targets.length === 0) {
                    checkTargetAlive(targets, [this.id-(cols*2)-1, this.id-(cols*2), this.id-(cols*2)+1])
                }
                return targets;
            }
        }
        return [];
    }

};