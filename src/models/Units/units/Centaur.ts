import MeleeUnit from '../UnitTypes/MeleeUnit';

export const Centaur = (id: number) => {
    return new MeleeUnit(
        id,
        'Centaur',
        150,
        50,
        50,
        'https://image.flaticon.com/icons/svg/1716/1716047.svg'
    );
};