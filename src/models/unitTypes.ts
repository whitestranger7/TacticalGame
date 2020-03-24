import Unit from '../models/UnitModel';
import { meleeAction, rangeAction, magicAction, healAction, paralyzeAction } from './strategies/actionStrategies';

export class MeleeUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, action = meleeAction()) {
        super(name, health, initiative, damage, image, action);
    }
}

export class RangeUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, action = rangeAction()) {
        super(name, health, initiative, damage, image, action);
    }
}

export class MagicUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, action = magicAction()) {
        super(name, health, initiative, damage, image, action);
    }
}

export class HealUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, action = healAction()) {
        super(name, health, initiative, damage, image, action);
    }
}

export class ParalyzeUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, action = paralyzeAction()) {
        super(name, health, initiative, damage, image, action);
    }
}