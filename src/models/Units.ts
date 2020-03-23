import UnitModel from './UnitModel';
import { meleeAction, rangeAction, magicAction, healAction, paralyzeAction } from '../strategies/actionStrategies';

export const Skeleton = class Skeleton extends UnitModel {
    constructor() {
        super('melee', 'Skeleton', 100, 50, 25, 'img/test', meleeAction());
    };
}

export const Centaur = class Centaur extends UnitModel {
    constructor() {
        super('melee', 'Centaur', 150, 50, 50, 'img/test', meleeAction());
    }
};

export const Bandit = class Bandit extends UnitModel {
    constructor() {
        super('range', 'Bandit', 45, 60, 30, 'img/test', rangeAction());
    }
};

export const ElfArcher = class ElfArcher extends UnitModel {
    constructor() {
        super('range', 'Elf Archer', 90, 60, 40, 'img/test', rangeAction());
    }
};

export const SkeletonMage = class SkeletonMage extends UnitModel {
    constructor() {
        super('mage', 'Skeleton Mage', 50, 40, 20, 'img/test', magicAction());
    }
};

export const Archimage = class Archimage extends UnitModel {
    constructor() {
        super('mage', 'Archimage', 90, 40, 40, 'img/test', magicAction());
    }
};

export const Monk = class Monk extends UnitModel {
    constructor() {
        super('healer', 'Monk', 70, 20, 40, 'img/test', healAction());
    }
};

export const Sirena = class Sirena extends UnitModel {
    constructor() {
        super('paralyzer', 'Sirena', 80, 20, 0, 'img/test', paralyzeAction());
    }
};