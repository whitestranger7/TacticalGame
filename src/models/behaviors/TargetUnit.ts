export default class TargetUnit {
    constructor(public targets: number | number[]){
        this.targets = targets;
    };

    getTargets() {
        return this.targets;
    }

};