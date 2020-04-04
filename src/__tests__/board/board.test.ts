import BoardModel from '../../models/Board/BoardModel';
jest.mock('../../models/Board/BoardInstance.ts');

export const board = describe('Board', () => {
    
    const rows = 4;
    const cols = Math.floor(Math.random() * 6) + 1;

    it('Board size must be appropriate', () => {
        const Board = new BoardModel(rows, cols);
        expect(Board.getSize).toBe(rows*cols);
    });

    it('Team sizes must be the same', () => {
        const Board = new BoardModel(rows, cols);
        expect(Board.getTeam1.length).toBe(Board.getTeam2.length);
    });

    it('Instant winner must be null', () => {
        const Board = new BoardModel(rows, cols);
        expect(Board.getWinner).toBeNull();
    });

    it('Team 1 must be a winner when all units from team 2 are dead', () => {
        const Board = new BoardModel(rows, cols);
        for(let i of Board.getTeam2){
            i.takeDamage(i.getMaxHp);
        }
        Board.checkWinner();
        expect(Board.getWinner).toBe(1);
    });

    it('Team 2 must be a winner when all units from team 1 are dead', () => {
        const Board = new BoardModel(rows, cols);
        for(let i of Board.getTeam1){
            i.takeDamage(i.getMaxHp);
        };
        Board.checkWinner();
        expect(Board.getWinner).toBe(2);
    });

});