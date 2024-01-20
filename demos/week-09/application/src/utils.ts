export interface Scores {
    player1: number,
    player2: number
};

export type Velocity = {
    x: number,
    y: number
};

export enum State {
    STARTED,
    STOPPED 
};

export const random = ( min : number, max : number ) => Math.floor( min + Math.random() * ( max - min + 1 ) );

export const getVelocity = ( min = 3, max = 8 ) => {
    let x = random( min, max );
    let y = random( min, max );

    const dirX = random( 0, 1 ) === 1 ? -1 : 1;
    x = x * dirX;
    
    const dirY = random( 0, 1 ) === 1 ? -1 : 1;
    y = y * dirY;

    return {
        // x: x,
        // y: y
        x,
        y
    } as Velocity;
};