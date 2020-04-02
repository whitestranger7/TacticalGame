import MeleeTargetUnit from '../../src/models/behaviors/targetsBehavior/MeleeTargetUnit';
import BoardModel from '../../src/models/Board/BoardModel';
jest.mock('../../src/models/Board/BoardInstance.ts');

export const meleeTargeting = describe('Melee Targeting Behavior', () => {
    const rows = 4;
    const cols = Math.floor(Math.random() * 6);
    const Board = new BoardModel(rows, cols);

    test('Melee unit cant deal damage if its not in frontline', () => {
        for(let i = 0; i < cols; i++) {
            const meleeBehavior = new MeleeTargetUnit(i);
            expect(meleeBehavior.getTargets()).toEqual([]);
        }
        for(let i = Board.getSize - 1; i > Board.getSize - cols - 1; i++) {
            const meleeBehavior = new MeleeTargetUnit(i);
            expect(meleeBehavior.getTargets).toEqual([]);
        }
    });



});