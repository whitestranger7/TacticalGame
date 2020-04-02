import MeleeTargetUnit from '../../models/behaviors/targetsBehavior/MeleeTargetUnit';
import BoardModel from '../../models/Board/BoardModel';
jest.mock('../../models/Board/BoardInstance.ts');

export const meleeTargeting = describe('Melee targeting behavior', () => {

    const rows = 4;
    const cols = Math.floor(Math.random() * 6) + 2;
    const Board = new BoardModel(rows, cols);

    const frontlineStart = cols * rows / 2 - cols;
    const frontlineEnd = cols * rows / 2 + cols - 1; 

    it('Melee units cant deal damage not from frontline', () => {
        for(let i = 0; i < frontlineStart; i++) {
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual([]);
        }
        for(let i = Board.getSize - 1; i > frontlineEnd; i--){
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual([]);
        }
    });

    it('Frontline melee units can attack', () => {
        for(let i = frontlineStart; i <= frontlineEnd; i++) {
            expect(new MeleeTargetUnit(i).getTargets(Board)).not.toEqual([]);
        }
    });

    it('Melee units from edges of frontline can attack two enemy units in front of them', () => {
        const first = [frontlineStart+cols, frontlineStart+cols+1];
        const second = [frontlineEnd-1, frontlineEnd];
        const third = [frontlineStart, frontlineStart+1];
        const forth = [frontlineStart+cols-2, frontlineStart+cols-1];
        expect(new MeleeTargetUnit(frontlineStart).getTargets(Board)).toEqual(first);
        expect(new MeleeTargetUnit(frontlineStart+cols-1).getTargets(Board)).toEqual(second);
        expect(new MeleeTargetUnit(frontlineEnd-cols+1).getTargets(Board)).toEqual(third);
        expect(new MeleeTargetUnit(frontlineEnd).getTargets(Board)).toEqual(forth);
    });

    it('Melee units in center of frontline can attack three enemy units in front of them', () => {
        for(let i = frontlineStart+1; i < frontlineEnd-cols; i++){
            const targets = [i+cols-1, i+cols, i+cols+1];
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual(targets)
        }
        for(let i = frontlineEnd-1; i > frontlineStart+cols; i--) {
            const targets = [i-cols-1, i-cols, i-cols+1];
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual(targets);
        }
    });

});