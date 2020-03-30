import MeleeUnit from '../UnitTypes/MeleeUnit';

export const Skeleton = (id: number) => {
    return new MeleeUnit(
        id,
        'Skeleton',
        100,
        25,
        50,
        'https://cdn3.iconfinder.com/data/icons/evil-fantasy-characters-from-medieval/238/fantasy-character-evil-dark-002-512.png'
    );
};