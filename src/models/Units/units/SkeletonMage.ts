import MagicUnit from '../UnitTypes/MagicUnit';

export const SkeletonMage = (id: number) => {
    return new MagicUnit(
        id,
        'Skeleton Mage',
        50,
        20,
        40,
        'https://cdn3.iconfinder.com/data/icons/evil-fantasy-characters-from-medieval/240/fantasy-character-evil-dark-013-512.png'
    );
};