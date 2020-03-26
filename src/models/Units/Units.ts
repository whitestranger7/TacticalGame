import MeleeUnit from './UnitTypes/MeleeUnit';
import RangeUnit from './UnitTypes/RangeUnit';
import MagicUnit from './UnitTypes/MagicUnit';
import HealUnit from './UnitTypes/HealUnit';
import ParalyzeUnit from './UnitTypes/ParalyzeUnit';

export const Skeleton = (id: number) => {
    return new MeleeUnit(
        id,
        'Skeleton',
        100,
        25,
        50,
        [6,7],
        'https://media.istockphoto.com/vectors/cartoon-skeleton-pointing-sign-vector-id928810044'
    );
};

export const Centaur = (id: number) => {
    return new MeleeUnit(
        id,
        'Centaur',
        150,
        50,
        50,
        [5,6],
        'https://previews.123rf.com/images/krisdog/krisdog1801/krisdog180100234/93547278-sagittarius-centaur-sign.jpg'
    );
};

export const Bandit = (id: number) => {
    return new RangeUnit(
        id,
        'Bandit',
        45,
        30,
        60,
        [10,11],
        'https://cdn.personage.ua/images/thumbnails/950/950/detailed/1/banditskaya-maska-chernaya-16810.jpg'
    );
};

export const ElfArcher = (id: number) => {
    return new RangeUnit(
        id,
        'Elf Archer',
        90,
        40,
        60,
        [9],
        'https://www.brickizimo-toys.com/3406-large_default/mirkwood-elf-.jpg'
    );
};

export const SkeletonMage = (id: number) => {
    return new MagicUnit(
        id,
        'Skeleton Mage',
        50,
        20,
        40,
        'https://ih1.redbubble.net/image.781346913.5216/flat,1000x1000,075,f.jpg'
    );
};

export const Archimage = (id: number) => {
    return new MagicUnit(
        id,
        'Archimage',
        90,
        40,
        40,
        'https://c7.uihere.com/files/992/321/174/magic-sticker-issou-archimage-dumbledor-thumb.jpg'
    );
};

export const Monk = (id: number) => {
    return new HealUnit(
        id,
        'Monk',
        70,
        40,
        20,
        'https://previews.123rf.com/images/sudowoodo/sudowoodo1708/sudowoodo170800032/84445531-buddhist-monk-in-orange-robes-sitting-in-meditation-cute-cartoon-tibetan-monk-meditating-vector-illu.jpg'
    );
};

export const Sirena = (id: number) => {
    return new ParalyzeUnit(
        id,
        'Sirena',
        80,
        20,
        'https://vignette.wikia.nocookie.net/defenseoftheancients/images/8/84/Naga_Siren.gif/revision/latest/top-crop/width/360/height/450?cb=20110819195002'
    );
};