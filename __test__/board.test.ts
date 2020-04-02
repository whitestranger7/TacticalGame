import BoardModel from '../src/models/Board/BoardModel';
jest.mock('../src/models/Board/BoardInstance.ts');

export const BorderTest = describe('Board', () => {

    const rows = 4;
    const cols = Math.floor(Math.random() * 6);
    const Board = new BoardModel(rows, cols);

    test('Board size must be appropriate', () => {
        expect(Board.getSize).toBe(rows*cols);
    });

    test('Team sizes must be the same', () => {
        expect(Board.getTeam1.length).toBe(Board.getTeam2.length);
    });

    test('There must be a winner if all units in opposite team are dead', () => {
        const winner = Math.floor(Math.random() * 2 + 1);
        if(winner === 1) {
            for(let i of Board.getTeam2){
                i.takeDamage(i.getMaxHp);
            }
        }
        for(let i of Board.getTeam1) {
            i.takeDamage(i.getMaxHp);
        }
        Board.checkWinner();
        expect(Board.getWinner).toBe(winner);
    });

});