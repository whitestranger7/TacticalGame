import Board from '../../Board/BoardInstance';

export const checkTargetAlive = (targets: number[], ids: number[]) => {
    for(let i of ids){
        if(Board.getUnits[i].getAliveStatus){
            targets.push(i)
        }
    }
}