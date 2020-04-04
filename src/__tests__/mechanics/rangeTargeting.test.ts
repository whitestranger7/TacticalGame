import RangeTargetUnit from '../../models/behaviors/targetsBehavior/RangeTargetUnit';
import BoardModel from '../../models/Board/BoardModel';
jest.mock('../../models/Board/BoardInstance.ts');

export const rangeTargeting = describe('Target targeting behavior', () => {
    const rows = 4;
    const cols = Math.floor(Math.random() * 6) + 1;
    const Board = new BoardModel(rows, cols);
    const unitIdTeam1 = Math.floor((Math.random() * Board.getSize) / 2);
    const unitIdTeam2 =
        Math.floor((Math.random() * Board.getSize) / 2) + Board.getSize / 2;
    const unitTeam1 = new RangeTargetUnit(unitIdTeam1);
    const unitTeam2 = new RangeTargetUnit(unitIdTeam2);

    it('Instant targets must be all enemy units', () => {
        for (let i of Board.getTeam2) {
            expect(unitTeam1.getTargets(Board).includes(i.getId)).toBeTruthy();
        }
        for (let i of Board.getTeam1) {
            expect(unitTeam2.getTargets(Board).includes(i.getId)).toBeTruthy();
        }
    });

    it('Dead unit cant be a target', () => {
        let targets = [];
        for (let i of Board.getTeam1) {
            const random = Math.floor(Math.random() * 2);
            if(random === 0) {
                i.takeDamage(i.getMaxHp);
            }else {
                targets.push(i.getId);
            }
        }
        for(let i of Board.getTeam2) {
            const unit = new RangeTargetUnit(i.getId);
            expect(unit.getTargets(Board)).toEqual(targets);
        }
    });
});
