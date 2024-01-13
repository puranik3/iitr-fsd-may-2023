export class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
        console.log( this.apples );
    }

    seed() {
        const { level, nbCellsX, nbCellsY } = this.game.configuration;
        const numApples = level * 5;

        for( let idx = 0; idx < numApples; ++idx ) {
            const x = Math.floor( Math.random() * nbCellsX );
            const y = Math.floor( Math.random() * nbCellsY );
            this.apples.push({
                // x: x,
                // y: y
                x,
                y
            });
        }
    }

    paint( context ) {
        const { width, height, cellSize } = this.game.configuration;

        context.fillStyle = 'black';
        context.lineStyle = 1;

        // horizontal lines
        for( let y = 0; y <= height; y += cellSize ) {
            context.beginPath();
            context.moveTo( 0, y );
            context.lineTo( width, y );
            context.stroke();
        }

        // vertical lines
        for( let x = 0; x <= width; x += cellSize ) {
            context.beginPath();
            context.moveTo( x, 0 );
            context.lineTo( x, height );
            context.stroke();
        }

        // apples
        context.fillStyle = 'red';
        this.apples.forEach( apple => {
            context.fillRect(
                apple.x * cellSize,
                apple.y * cellSize,
                cellSize,
                cellSize
            )
        });
    }

    hasEatenApple( head ) {
        return this.apples.some(
            apple => {
                return apple.x === head.x && apple.y === head.y
            }
        );
    }

    eatApple( head ) {
        this.apples = this.apples.filter(
            apple => {
                return apple.x !== head.x || apple.y !== head.y
            }
        );
    }

    areAllApplesEaten() {
        console.log( this.areAllApplesEaten );
        return this.apples.length === 0;
    }
}