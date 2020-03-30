import RangeUnit from '../UnitTypes/RangeUnit';

export const ElfArcher = (id: number) => {
    return new RangeUnit(
        id,
        'Elf Archer',
        90,
        40,
        60,
        'https://cdn3.iconfinder.com/data/icons/christmas-related-set-5-filled/64/Christmas-16-512.png'
    );
};