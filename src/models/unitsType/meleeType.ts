import Unit from '../UnitModel';
import { meleeAction } from '../../strategies/actionStrategies';

export default class MeleeUnit extends Unit {
    constructor(name: string, health: number, initiative: number, damage: number, image: string, actionStrategy = meleeAction) {
        super(name, health, initiative, damage, image);
    }
}
