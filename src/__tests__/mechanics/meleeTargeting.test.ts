import MeleeTargetUnit from '../../models/behaviors/targetsBehavior/MeleeTargetUnit';
import BoardModel from '../../models/Board/BoardModel';
jest.mock('../../models/Board/BoardInstance.ts');

export const meleeTargeting = describe('Melee targeting behavior', () => {

    const rows = 4;
    const cols = 3;

    const frontlineStart = cols * rows / 2 - cols;
    const frontlineEnd = cols * rows / 2 + cols - 1;

    const firstEdgeUnit = new MeleeTargetUnit(frontlineStart);
    const secondEdgeUnit = new MeleeTargetUnit(frontlineStart+cols-1);
    const thirdEdgeUnit = new MeleeTargetUnit(frontlineEnd-cols+1);
    const forthEdgeUnit = new MeleeTargetUnit(frontlineEnd);

    it('Melee units cant deal damage not from frontline', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = 0; i < frontlineStart; i++) {
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual([]);
        }
        for(let i = Board.getSize - 1; i > frontlineEnd; i--){
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual([]);
        }
    });

    it('Frontline melee units can attack', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineStart; i <= frontlineEnd; i++) {
            expect(new MeleeTargetUnit(i).getTargets(Board)).not.toEqual([]);
        }
    });

    it('Melee units from edges of frontline can attack two enemy units in front of them', () => {
        const Board = new BoardModel(rows, cols);
        const first = [frontlineStart+cols, frontlineStart+cols+1];
        const second = [frontlineEnd-1, frontlineEnd];
        const third = [frontlineStart, frontlineStart+1];
        const forth = [frontlineStart+cols-2, frontlineStart+cols-1];
        expect(firstEdgeUnit.getTargets(Board)).toEqual(first);
        expect(secondEdgeUnit.getTargets(Board)).toEqual(second);
        expect(thirdEdgeUnit.getTargets(Board)).toEqual(third);
        expect(forthEdgeUnit.getTargets(Board)).toEqual(forth);
    });

    it('Melee units in center of frontline can attack three enemy units in front of them', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineStart+1; i < frontlineEnd-cols; i++){
            const targets = [i+cols-1, i+cols, i+cols+1];
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual(targets);
        }
        for(let i = frontlineEnd-1; i > frontlineStart+cols; i--) {
            const targets = [i-cols-1, i-cols, i-cols+1];
            expect(new MeleeTargetUnit(i).getTargets(Board)).toEqual(targets);
        }
    });

    it('Targets must be appropriate when units dead in front of first edge melee unit', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineStart+cols; i < frontlineEnd; i++){
            const unit = Board.getUnits[i];
            unit.takeDamage(unit.getMaxHp);
            expect(firstEdgeUnit.getTargets(Board)).toEqual([i+1]);
        }
        const unit = Board.getUnits[frontlineEnd];
        unit.takeDamage(unit.getMaxHp);
        expect(firstEdgeUnit.getTargets(Board)).not.toBeNull();
    });

    it('Targets must be appropriate when units dead in front of second edge melee unit', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineEnd; i > frontlineStart+cols; i--) {
            const unit = Board.getUnits[i];
            unit.takeDamage(unit.getMaxHp);
            expect(secondEdgeUnit.getTargets(Board)).toEqual([i-1]);
        }
        const unit = Board.getUnits[frontlineStart+cols];
        unit.takeDamage(unit.getMaxHp);
        expect(firstEdgeUnit.getTargets(Board)).not.toEqual([]);
    });

    it('Targets must be appropriate when units dead in front of third edge melee unit', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineStart; i < frontlineStart+cols-1; i++) {
            const unit = Board.getUnits[i];
            unit.takeDamage(unit.getMaxHp);
            expect(thirdEdgeUnit.getTargets(Board)).toEqual([i+1]);
        }
        const unit = Board.getUnits[frontlineStart+cols-1];
        unit.takeDamage(unit.getMaxHp);
        expect(thirdEdgeUnit.getTargets(Board)).not.toEqual([]);
    });

    it('Targets must be appropriate when units dead in front of forth edge melee unit', () => {
        const Board = new BoardModel(rows, cols);
        for(let i = frontlineStart+cols-1; i < frontlineStart; i--) {
            const unit = Board.getUnits[i];
            unit.takeDamage(unit.getMaxHp);
            expect(forthEdgeUnit.getTargets(Board)).toEqual([i+1]);
        }
        const unit = Board.getUnits[frontlineStart];
        unit.takeDamage(unit.getMaxHp);
        expect(forthEdgeUnit.getTargets(Board)).not.toEqual([]);
    });

});