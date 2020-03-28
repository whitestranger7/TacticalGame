import ITargetBehavior from "../ITargetBehavior";
import Board from "../../Board/BoardInstance";

export default class MeleeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        const start = Board.getCols * (Board.getRows / 2) - (Board.getCols);
        const end = start + (Board.getCols * 2) - 1;
        if(this.id >= start && this.id <= end){
            if(this.id <= (start + Board.getCols - 1)){
                if(this.id === start) {
                    return [this.id+Board.getCols, this.id+Board.getCols+1];
                }
                if(this.id === (start + Board.getCols - 1)) {
                    return [this.id+Board.getCols-1, this.id+Board.getCols];
                }
                return [this.id+Board.getCols-1, this.id+Board.getCols, this.id+Board.getCols+1];
            }else {
                if(this.id === end){
                    return [this.id-Board.getCols-1, this.id-Board.getCols];
                }
                if(this.id === (end-Board.getCols+1)) {
                    return [this.id-Board.getCols, this.id-Board.getCols+1];
                }
                return [this.id-Board.getCols-1, this.id-Board.getCols, this.id-Board.getCols+1];
            }
        }
        return [];
    }

};