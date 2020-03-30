import RangeUnit from '../UnitTypes/RangeUnit';

export const Bandit = (id: number) => {
    return new RangeUnit(
        id,
        'Bandit',
        45,
        30,
        60,
        'https://cdn2.iconfinder.com/data/icons/bad-boys/512/bandit_1-512.png'
    );
};