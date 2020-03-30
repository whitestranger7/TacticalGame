import MeleeUnit from './UnitTypes/MeleeUnit';
import RangeUnit from './UnitTypes/RangeUnit';
import MagicUnit from './UnitTypes/MagicUnit';
import HealUnit from './UnitTypes/HealUnit';
import ParalyzeUnit from './UnitTypes/ParalyzeUnit';

const Skeleton = (id: number) => {
    return new MeleeUnit(
        id,
        'Skeleton',
        100,
        25,
        50,
        'https://cdn3.iconfinder.com/data/icons/evil-fantasy-characters-from-medieval/238/fantasy-character-evil-dark-002-512.png'
    );
};

const Centaur = (id: number) => {
    return new MeleeUnit(
        id,
        'Centaur',
        150,
        50,
        50,
        'https://image.flaticon.com/icons/svg/1716/1716047.svg'
    );
};

const Bandit = (id: number) => {
    return new RangeUnit(
        id,
        'Bandit',
        45,
        30,
        60,
        'https://cdn2.iconfinder.com/data/icons/bad-boys/512/bandit_1-512.png'
    );
};

const ElfArcher = (id: number) => {
    return new RangeUnit(
        id,
        'Elf Archer',
        90,
        40,
        60,
        'https://cdn3.iconfinder.com/data/icons/christmas-related-set-5-filled/64/Christmas-16-512.png'
    );
};

const SkeletonMage = (id: number) => {
    return new MagicUnit(
        id,
        'Skeleton Mage',
        50,
        20,
        40,
        'https://cdn3.iconfinder.com/data/icons/evil-fantasy-characters-from-medieval/240/fantasy-character-evil-dark-013-512.png'
    );
};

const Archimage = (id: number) => {
    return new MagicUnit(
        id,
        'Archimage',
        90,
        40,
        40,
        'https://cdn1.iconfinder.com/data/icons/game-components-icostory-black-and-white/64/character-game-wizard-mage-512.png'
    );
};

const Monk = (id: number) => {
    return new HealUnit(
        id,
        'Monk',
        70,
        40,
        20,
        'https://cdn2.iconfinder.com/data/icons/spiritual-2/64/Spiritual20-512.png'
    );
};

const Sirena = (id: number) => {
    return new ParalyzeUnit(
        id,
        'Sirena',
        80,
        20,
        'https://image.flaticon.com/icons/png/512/571/571050.png'
    );
};

export const units = [Skeleton, Centaur, Bandit, ElfArcher, SkeletonMage, Archimage, Monk, Sirena];