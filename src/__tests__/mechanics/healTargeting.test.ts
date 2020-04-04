import HealTargetUnit from '../../models/behaviors/targetsBehavior/HealTargetUnit';
import BoardModel from '../../models/Board/BoardModel';
import { emitKeypressEvents } from 'readline';
jest.mock('../../models/Board/BoardInstance.ts');

export const healTargeting = describe('Heal targeting behavior', () => {

    const rows = 4;
    const cols = Math.floor(Math.random() * 6) + 1;
    const Board = new BoardModel(rows, cols);
    const firstTeamHealer = new HealTargetUnit(Board.getTeam1[0].getId);
    const secondTeamHealer = new HealTargetUnit(Board.getTeam2[0].getId);

    it('If all team have full hp then targets must be an empty array', () => {
        expect(firstTeamHealer.getTargets(Board)).toEqual([]);
        expect(secondTeamHealer.getTargets(Board)).toEqual([]);
    });

    it('Can heal only damaged units', () => {
        let targets = [];
        for (let i of Board.getTeam1) {
            const random = Math.floor(Math.random() * 2);
            if(random === 0) {
                i.takeDamage(10);
                targets.push(i.getId);
            }
        }
        expect(firstTeamHealer.getTargets(Board)).toEqual(targets);
    });

});
