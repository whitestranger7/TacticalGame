import TargetUnit from '../TargetUnit';

export default class ParalyzeBehavior extends TargetUnit {
    constructor(public targets: number) {
        super(targets);
    }
};