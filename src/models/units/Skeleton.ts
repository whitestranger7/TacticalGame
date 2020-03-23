import Unit from '../Unit';
import meleeDamage from '../../strategies/meleeDamage';

export default class Skeleton extends Unit {
    constructor(){
        super('melee', 'Skeleton', 100, 50, 25, 'test', meleeDamage());
    }
};