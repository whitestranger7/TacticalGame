import TargetUnit from '../TargetUnit';

export default class HealBehavior extends TargetUnit {
    constructor(public healDeal: number, public targets: number) {
        super(targets);
        this.healDeal = healDeal;
    };
};