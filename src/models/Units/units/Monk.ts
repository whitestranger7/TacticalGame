import HealUnit from '../UnitTypes/HealUnit';

export const Monk = (id: number) => {
    return new HealUnit(
        id,
        'Monk',
        70,
        40,
        20,
        'https://cdn2.iconfinder.com/data/icons/spiritual-2/64/Spiritual20-512.png'
    );
};