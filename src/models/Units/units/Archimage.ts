import MagicUnit from '../UnitTypes/MagicUnit';

export const Archimage = (id: number) => {
    return new MagicUnit(
        id,
        'Archimage',
        90,
        40,
        40,
        'https://cdn1.iconfinder.com/data/icons/game-components-icostory-black-and-white/64/character-game-wizard-mage-512.png'
    );
};