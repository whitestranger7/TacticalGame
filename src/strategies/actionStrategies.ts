import actionBehavior from './actionBehavior';

export const meleeAction = class MeleeAction implements actionBehavior {
    action() {
        console.log('Melee action');
        return true;
    }
};

export const rangeAction = class RangeAction implements actionBehavior {
    action() {
        console.log('Range action');
        return true;
    }
};

export const magicAction = class MagicAction implements actionBehavior {
    action() {
        console.log('Magic action');
        return true;
    }
};

export const healAction = class HealAction implements actionBehavior {
    action() {
        console.log('Heal action');
        return true;
    }
};

export const paralyzeAction = class ParalyzeAction implements actionBehavior {
    action() {
        console.log('Paralyze action');
        return true;
    }
};