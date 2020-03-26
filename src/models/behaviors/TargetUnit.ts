import IActionBehavior from './IActionBehavior';

export default class MeleeTargetUnit implements IActionBehavior{
    constructor(public targets: number | number[]){
        this.targets = targets;
    };
};