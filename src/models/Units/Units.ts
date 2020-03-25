import MeleeUnit from './UnitTypes/MeleeUnit';
import RangeUnit from './UnitTypes/RangeUnit';
import MagicUnit from './UnitTypes/MagicUnit';
import HealUnit from './UnitTypes/HealUnit';
import ParalyzeUnit from './UnitTypes/ParalyzeUnit';

export const Skeleton = () => {
    return new MeleeUnit(
        'Skeleton',
        100,
        25,
        50,
        'https://media.istockphoto.com/vectors/cartoon-skeleton-pointing-sign-vector-id928810044'
    );
};

export const Centaur = () => {
    return new MeleeUnit(
        'Centaur',
        150,
        50,
        50,
        'https://previews.123rf.com/images/krisdog/krisdog1801/krisdog180100234/93547278-sagittarius-centaur-sign.jpg'
    );
};

export const Bandit = () => {
    return new RangeUnit(
        'Bandit',
        45,
        30,
        60,
        'https://cdn.personage.ua/images/thumbnails/950/950/detailed/1/banditskaya-maska-chernaya-16810.jpg'
    );
};

export const ElfArcher = () => {
    return new RangeUnit(
        'Elf Archer',
        90,
        40,
        60,
        'https://www.brickizimo-toys.com/3406-large_default/mirkwood-elf-.jpg'
    );
};

export const SkeletonMage = () => {
    return new MagicUnit(
        'Skeleton Mage',
        50,
        20,
        40,
        'https://ih1.redbubble.net/image.781346913.5216/flat,1000x1000,075,f.jpg'
    );
};

export const Archimage = () => {
    return new MagicUnit(
        'Archimage',
        90,
        40,
        40,
        'https://c7.uihere.com/files/992/321/174/magic-sticker-issou-archimage-dumbledor-thumb.jpg'
    );
};

export const Monk = () => {
    return new HealUnit(
        'Monk',
        70,
        40,
        20,
        'https://previews.123rf.com/images/sudowoodo/sudowoodo1708/sudowoodo170800032/84445531-buddhist-monk-in-orange-robes-sitting-in-meditation-cute-cartoon-tibetan-monk-meditating-vector-illu.jpg'
    );
};

export const Sirena = () => {
    return new ParalyzeUnit(
        'Sirena',
        80,
        20,
        'https://vignette.wikia.nocookie.net/defenseoftheancients/images/8/84/Naga_Siren.gif/revision/latest/top-crop/width/360/height/450?cb=20110819195002'
    );
};