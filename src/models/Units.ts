import { MeleeUnit, RangeUnit, MagicUnit, HealUnit, ParalyzeUnit } from './unitTypes';

export const Skeleton = () => {
    return new MeleeUnit('Skeleton', 100, 50, 25, 'test/img');
};
export const Centaur = () => {
    return new MeleeUnit('Centaur', 150, 50, 50, 'test/img');
};
export const Bandit = () => {
    return new RangeUnit('Bandit', 45, 60, 30, 'test/img');
};
export const ElfArcher = () => {
    return new RangeUnit('ElfArcher', 90, 60, 40, 'test/img');
};
export const SkeletonMage = () => {
    return new MagicUnit('SkeletonMage', 50, 40, 20, 'test/img');
};
export const Archimage = () => {
    return new MagicUnit('Archimage', 90, 40, 40, 'test/img');
};
export const Monk = () => {
    return new HealUnit('Monk', 70, 40, 20, 'test/img');
};
export const Sirena = () => {
    return new ParalyzeUnit('Sirena', 90, 20, 0, 'test/img');
};
