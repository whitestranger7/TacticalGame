import HealBehavior from '../../models/behaviors/actionTypes/healBehavior'
import BoardModel from '../../models/Board/BoardModel';
jest.mock('../../models/Board/BoardInstance.ts');

export const healAction = describe('Heal action', () => {

    const rows = 4;
    const cols = Math.floor(Math.random() * 6) + 1;
    const Board = new BoardModel(rows, cols);
    const firstTeamHealer = new HealBehavior(40);
    
    it('Heal only up to maxHP', () => {
        Board.getTeam1[0].takeDamage(10);
        firstTeamHealer.action(0, Board);
        expect(Board.getTeam1[0].getHp).toEqual(Board.getTeam1[0].getMaxHp);
    });

});