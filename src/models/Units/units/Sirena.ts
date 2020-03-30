import ParalyzeUnit from '../UnitTypes/ParalyzeUnit';

export const Sirena = (id: number) => {
    return new ParalyzeUnit(
        id,
        'Sirena',
        80,
        20,
        'https://image.flaticon.com/icons/png/512/571/571050.png'
    );
};