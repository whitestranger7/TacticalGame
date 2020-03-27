import ITargetBehavior from "../ITargetBehavior";
import board from "../../Board/BoardInstance";

export default class MeleeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        if(this.id > 2 && this.id <= 5) {
            if(board.getUnits[6].hp <= 0 && board.getUnits[7].hp <= 0 && board.getUnits[8].hp <= 0){
                if(this.id === 3) {
                    return [9, 10]
                }
                if(this.id === 4) {
                    return [9, 10, 11]
                }
                if(this.id === 5) {
                    return [10, 11]
                }
            }else {
                if(this.id === 3) {
                    return [6, 7]
                }
                if(this.id === 4) {
                    return [6, 7, 8]
                }
                if(this.id === 5) {
                    return [7, 8]
                }
            }
        }
        if(this.id >= 6 && this.id <= 8) {
            if(board.getUnits[3].hp <= 0 && board.getUnits[4].hp <= 0 && board.getUnits[5].hp <= 0){
                if(this.id === 6) {
                    return [0, 1]
                }
                if(this.id === 7) {
                    return [0, 1, 2]
                }
                if(this.id === 8){
                    return [2, 3]
                }
            }else {
                if(this.id === 6) {
                    return [3, 4]
                }
                if(this.id === 7) {
                    return [3, 4, 5]
                }
                if(this.id === 8) {
                    return [4, 5]
                }
            }
        }
        return null;
    }

};