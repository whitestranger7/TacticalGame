import Board from './BoardModel';
import { Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena } from '../Units/Units';

const availableUnits = [
    Skeleton,
    Centaur,
    Bandit,
    ElfArcher,
    SkeletonMage,
    Archimage,
    Monk,
    Sirena
];

const units = [];
for (let i = 0; i < 12; i++) {
    units.push(
        availableUnits[Math.floor(Math.random() * availableUnits.length)](i)
    );
}

export default new Board(units, units.slice(0, 6), units.slice(6, 12));
