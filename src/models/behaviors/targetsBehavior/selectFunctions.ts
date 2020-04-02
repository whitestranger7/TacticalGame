import BoardModel from '../../Board/BoardModel';

export const checkTargetAlive = (Board: BoardModel, targets: number[], ids: number[]) => {
    for(let i of ids){
        if(Board.getUnits[i].getAliveStatus){
            targets.push(i)
        }
    }
}