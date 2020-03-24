import actionBehavior from './strategyInterface';

export const meleeAction = class MeleeAction implements actionBehavior {
    action() {
        console.log('Melee Action')
        return true;
    }
}
export const rangeAction = class RangeAction implements actionBehavior {
    action() {
        console.log('Range Action')
        return true;
    }
}
export const magicAction = class MagicAction implements actionBehavior {
    action() {
        console.log('Mage Action')
        return true;
    }
}
export const healAction = class HealAction implements actionBehavior {
    action() {
        console.log('Heal Action')
        return true;
    }
}
export const paralyzeAction = class ParalyzeAction implements actionBehavior {
    action() {
        console.log('Paralyze Action')
        return true;
    }
}