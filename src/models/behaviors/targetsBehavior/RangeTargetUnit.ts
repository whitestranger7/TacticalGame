import ITargetBehavior from "../ITargetBehavior";

export default class RangeTargetUnit implements ITargetBehavior {
    constructor(public id: number) {
        this.id = id;
    };

    getTargets() {
        if(this.id > 5) {
            return [0, 1, 2, 3, 4, 5]
        }
        return [6, 7, 8, 9, 10, 11]
    }

};